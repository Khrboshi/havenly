/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          dark: "#2563EB"
        },
        background: "#F8FAFC",
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#1E293B",
          muted: "#64748B"
        },
        border: "#E2E8F0",
        success: "#22C55E",
        error: "#F87171"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.05)"
      }
    },
  },
  plugins: [],
};
