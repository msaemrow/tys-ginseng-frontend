import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { createContext, runInContext } from "node:vm";

// Exercise the application's consent lifecycle with browser/provider boundaries
// mocked. No requests are sent to real analytics services during these tests.
function setup({ valid = false, accepted = false } = {}) {
  const state = { valid, accepted, scripts: [], cleared: [], reloads: 0, runs: 0 };
  const context = createContext({
    CookieConsent: {
      validConsent: () => state.valid,
      acceptedCategory: () => state.accepted,
      eraseCookies: (cookies) => state.cleared.push(cookies),
      showPreferences: () => { state.preferencesShown = true; },
      run: async (config) => {
        state.runs++;
        state.config = config;
        if (state.valid) config.onConsent();
      },
    },
    window: { location: { reload: () => state.reloads++ } },
    document: {
      createElement: () => ({}),
      head: { appendChild: (script) => state.scripts.push(script.src) },
    },
  });
  for (const file of ["cookieConsent.js", "analytics.js"]) {
    const source = readFileSync(new URL(`../src/utils/${file}`, import.meta.url), "utf8")
      .replace(/^import .*;\n/gm, "")
      .replace(/^export /gm, "");
    runInContext(source, context);
  }
  return { state, context };
}

test("first visit and rejection never load analytics or queue events", async () => {
  const { state, context } = setup();
  await context.initializeCookieConsent();
  context.trackEvent("before_choice");
  assert.equal(state.scripts.length, 0);
  assert.equal(context.window.gtag, undefined);
  assert.equal(context.window.clarity, undefined);
  assert.equal(state.config.mode, "opt-in");
  assert.equal(state.config.categories.analytics.enabled, false);
  assert.equal(state.config.cookie.expiresAfterDays, 182);

  state.valid = true;
  state.config.onConsent();
  context.trackEvent("after_rejection");
  assert.equal(state.scripts.length, 0);
  assert.equal(state.reloads, 0);
  assert.ok(state.cleared.length > 0);
});

test("acceptance loads both tools once and allows analytics events", async () => {
  const { state, context } = setup();
  await context.initializeCookieConsent();
  state.valid = true;
  state.accepted = true;
  state.config.onConsent();
  state.config.onChange();
  await context.initializeCookieConsent();
  assert.equal(state.runs, 1);
  assert.deepEqual(state.scripts, [
    "https://www.googletagmanager.com/gtag/js?id=G-L71GPQK2FL",
    "https://www.clarity.ms/tag/y1c5jo0hyq",
  ]);
  assert.equal(context.window.dataLayer[0][2].analytics_storage, "granted");
  assert.equal(context.window.dataLayer[0][2].ad_storage, "denied");
  assert.equal(context.window.clarity.q[0][1].analytics_Storage, "granted");
  assert.equal(context.window.clarity.q[0][1].ad_Storage, "denied");
  context.trackEvent("product_click");
  assert.equal(context.window.dataLayer.at(-1)[0], "event");
  assert.equal(context.window.clarity.q.at(-1)[1], "product_click");
});

test("returning visitors retain their accepted or rejected choice", async () => {
  for (const accepted of [true, false]) {
    const { state, context } = setup({ valid: true, accepted });
    await context.initializeCookieConsent();
    assert.equal(state.scripts.length, accepted ? 2 : 0);
    assert.equal(state.reloads, 0);
  }
});

test("withdrawing consent disables events, clears cookies, and reloads", async () => {
  const { state, context } = setup({ valid: true, accepted: true });
  await context.initializeCookieConsent();
  state.accepted = false;
  state.config.onChange();
  assert.equal(context.window["ga-disable-G-L71GPQK2FL"], true);
  assert.equal(context.window.clarity.q.at(-1)[1].analytics_Storage, "denied");
  assert.equal(state.reloads, 1);
  assert.ok(state.cleared.length > 0);
  const googleEvents = context.window.dataLayer.length;
  const clarityEvents = context.window.clarity.q.length;
  context.trackEvent("must_not_track");
  assert.equal(context.window.dataLayer.length, googleEvents);
  assert.equal(context.window.clarity.q.length, clarityEvents);
});

test("settings can be reopened and HTML contains no unconditional trackers", async () => {
  const { state, context } = setup();
  await context.initializeCookieConsent();
  context.showCookieSettings();
  assert.equal(state.preferencesShown, true);
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.doesNotMatch(html, /googletagmanager\.com|clarity\.ms\/tag|gtag\(/);
});
