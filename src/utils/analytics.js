export function trackEvent(eventName, parameters = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }
}
