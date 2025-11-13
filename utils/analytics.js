// utils/analytics.js
// Lightweight local analytics for Havenly

export function logEvent(name, details = {}) {
  if (typeof window === "undefined") return;

  const entry = {
    event: name,
    details,
    timestamp: new Date().toISOString(),
  };

  const stored = JSON.parse(localStorage.getItem("analytics") || "[]");
  stored.push(entry);
  localStorage.setItem("analytics", JSON.stringify(stored));

  // console log for dev feedback
  console.log(`[Analytics] ${name}`, details);
}

export function getAnalytics() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("analytics") || "[]");
}

export function clearAnalytics() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("analytics");
}
