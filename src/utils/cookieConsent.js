import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "../css/CookieConsent.css";

const GOOGLE_ID = "G-L71GPQK2FL";
const CLARITY_ID = "y1c5jo0hyq";
const analyticsCookies = [/^_ga(?:_|$)/, "_gid", /^_gat/, "_clck", "_clsk"];
let initialization;
let analyticsStarted = false;

export function hasAnalyticsConsent() {
  return CookieConsent.validConsent() && CookieConsent.acceptedCategory("analytics");
}

function loadAnalyticsScript(src) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function updateAnalyticsConsent() {
  const accepted = hasAnalyticsConsent();
  window[`ga-disable-${GOOGLE_ID}`] = !accepted;

  if (!accepted) {
    CookieConsent.eraseCookies(analyticsCookies);
    if (analyticsStarted) {
      window.clarity("consentv2", {
        ad_Storage: "denied",
        analytics_Storage: "denied",
      });
      // Reload to stop already-running scripts, including cookieless tracking.
      // CookieConsent saves the new choice before invoking this callback.
      window.location.reload();
    }
    return;
  }

  if (analyticsStarted) return;
  analyticsStarted = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ID);

  window.clarity = window.clarity || function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  window.clarity("consentv2", {
    ad_Storage: "denied",
    analytics_Storage: "granted",
  });

  loadAnalyticsScript(`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ID}`);
  loadAnalyticsScript(`https://www.clarity.ms/tag/${CLARITY_ID}`);
}

export function initializeCookieConsent() {
  // React StrictMode mounts effects twice; initialize the manager only once.
  if (initialization) return initialization;
  initialization = CookieConsent.run({
    mode: "opt-in",
    revision: 1,
    hideFromBots: false,
    cookie: { name: "tys_cookie_consent", expiresAfterDays: 182 },
    guiOptions: {
      consentModal: { layout: "bar inline", position: "bottom", equalWeightButtons: true },
      preferencesModal: { layout: "box", equalWeightButtons: true },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: {
        enabled: false,
        autoClear: { cookies: analyticsCookies.map((name) => ({ name })) },
      },
    },
    onConsent: updateAnalyticsConsent,
    onChange: updateAnalyticsConsent,
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            description: 'We save your cookie choice. Optional Microsoft Clarity and Google Analytics cookies help improve your experience. <a href="/privacy-policy">Privacy</a> · <a href="/cookies-policy">Cookies policy</a>.',
            acceptAllBtn: "Accept",
            acceptNecessaryBtn: "Reject",
            showPreferencesBtn: "Manage preferences",
          },
          preferencesModal: {
            title: "Cookie preferences",
            acceptAllBtn: "Accept analytics",
            acceptNecessaryBtn: "Reject analytics",
            savePreferencesBtn: "Save preferences",
            closeIconLabel: "Close cookie preferences",
            sections: [
              {
                title: "Your privacy choices",
                description: "Choose whether to allow optional analytics. You can change your choice anytime using Cookie Settings in the footer. Turning off analytics after enabling it will refresh this page to stop tracking.",
              },
              {
                title: "Necessary storage",
                description: "Remembers your cookie choice for 182 days and supports website features such as cart storage and administrator sign-in. This category is always enabled.",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics",
                description: "Google Analytics measures visits and page interactions. Microsoft Clarity provides heatmaps, behavioral metrics, and session replays to help us identify usability issues. Both services load only when you allow analytics.",
                linkedCategory: "analytics",
              },
              {
                title: "More information",
                description: 'Read our <a href="/privacy-policy">Privacy Policy</a> and <a href="/cookies-policy">Cookies Policy</a>, or contact <a href="mailto:tylersaemrow@gmail.com">tylersaemrow@gmail.com</a>.',
              },
            ],
          },
        },
      },
    },
  }).then(updateAnalyticsConsent);
  return initialization;
}

export function showCookieSettings() {
  CookieConsent.showPreferences();
}
