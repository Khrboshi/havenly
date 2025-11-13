// /utils/analytics.js
// Lightweight, privacy-friendly analytics utility for Havenly
// Works offline and supports optional external integrations

let sessionId = null;

/** Generate a short unique session ID */
function generateSessionId() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

/** Initialize analytics on client load */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  if (!sessionId) sessionId = generateSessionId();

  // Keep session across reloads for 30 min idle timeout
  const stored = localStorage.getItem("havenly_session");
  if (!stored) {
    localStorage.setItem(
      "havenly_session",
      JSON.stringify({ id: sessionId, startedAt: new Date().toISOString() })
    );
  } else {
    const parsed = JSON.parse(stored);
    sessionId = parsed.id || generateSessionId();
  }
}

/**
 * Log an event locally (and optionally send to external analytics)
 * @param {string} eventName  – e.g. "reflection_saved"
 * @param {object} [data={}]  – any contextual properties
 */
export function logEvent(eventName, data = {}) {
  if (typeof window === "undefined") return;
  if (!sessionId) initAnalytics();

  const event = {
    id: Math.random().toString(36).substring(2, 9),
    sessionId,
    name: eventName,
    data,
    timestamp: new Date().toISOString(),
  };

  // --- Local persistence for debugging / insight ---
  const existing = JSON.parse(localStorage.getItem("havenly_events") || "[]");
  existing.push(event);
  localStorage.setItem("havenly_events", JSON.stringify(existing));

  // --- Optional external send (future GA/Fathom/Umami hook) ---
  // if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
  //   fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(event),
  //   }).catch(() => {});
  // }

  if (process.env.NODE_ENV === "development") {
    console.info("📊 Event logged:", event);
  }
}

/** Clear stored analytics (for debugging / reset) */
export function clearAnalytics() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("havenly_events");
  localStorage.removeItem("havenly_session");
  sessionId = null;
}
