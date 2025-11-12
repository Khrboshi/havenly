export const track = (event, details = {}) => {
  if (typeof window === "undefined") return;
  const existing = JSON.parse(localStorage.getItem("analytics") || "[]");
  existing.push({ event, details, time: new Date().toISOString() });
  localStorage.setItem("analytics", JSON.stringify(existing));
};
