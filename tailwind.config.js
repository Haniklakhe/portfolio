/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        accent: {
          DEFAULT: "#06b6d4",
          light: "#22d3ee",
        },
        surface: {
          light: "#f8fafc",
          dark: "#0f172a",
          card: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Syne", "sans-serif"],
      },
      animation: {
        aurora: "aurora 8s ease-in-out infinite alternate",
        bounce2: "bounce 2s infinite",
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 10px 35px -12px rgba(6, 182, 212, 0.45)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
