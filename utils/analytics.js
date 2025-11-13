// /utils/analytics.js
// --------------------------------------------------
// Lightweight, privacy-friendly analytics for Havenly
// Works entirely client-side with optional remote hook
// --------------------------------------------------

let sessionId = null;

/** Generate a short unique session ID */
function generateSessionId() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

/** Initialize analytics on client load */
export function getAnalytics() {
  if (typeof window === "undefined") return null;
  if (!sessionId) sessionId = generateSessionId();

  // Maintain persistent session (30 min idle timeout logic simplified)
  const stored = localStorage.getItem("havenly_session");
  if (!stored) {
    const session = { id: sessionId, startedAt: new Date().toISOString() };
    localStorage.setItem("havenly_session", JSON.stringify(session));
    if (process.env.NODE_ENV === "development") {
      console.info("📊 Analytics session initialized:", session);
    }
  } else {
    const parsed = JSON.parse(stored);
    sessionId = parsed.id || generateSessionId();
  }

  return sessionId;
}

/**
 * Log an event locally (and optionally send to external analytics)
 * @param {string} eventName  – e.g. "reflection_saved"
 * @param {object} [data={}]  – contextual metadata
 */
export function logEvent(eventName, data = {}) {
  if (typeof window === "undefined") return;
  if (!sessionId) getAnalytics();

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

  // --- Optional external send (future integration) ---
  // if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
  //   fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(event),
  //   }).catch(() => {});
  // }

  if (process.env.NODE_ENV === "development") {
    console.info("📈 Event logged:", event);
  }
}

/** Clear stored analytics data (for debugging / user reset) */
export function clearAnalytics() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("havenly_events");
  localStorage.removeItem("havenly_session");
  sessionId = null;
  if (process.env.NODE_ENV === "development") {
    console.info("🧹 Analytics cleared");
  }
}
