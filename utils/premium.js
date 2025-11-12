export const isPremium = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("premium") === "true";
};

export const upgrade = () => {
  if (typeof window === "undefined") return;
  localStorage.setItem("premium", "true");
  alert("Thank you for upgrading! Premium enabled.");
};
