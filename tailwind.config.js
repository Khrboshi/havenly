/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // soft blue
          light: "#60A5FA",
          dark: "#2563EB"
        },
        calm: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1"
        },
        slate: {
          950: "#0f172a",
          900: "#1e293b",
          800: "#334155",
          700: "#475569",
          600: "#64748b",
          500: "#94a3b8",
          400: "#cbd5e1",
          300: "#e2e8f0",
          200: "#f1f5f9",
          100: "#f8fafc"
        }
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(59,130,246,0.25)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Poppins'", "sans-serif"]
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.43, 0.13, 0.23, 0.96)"
      }
    }
  },
  plugins: []
};
