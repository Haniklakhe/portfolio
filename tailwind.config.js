/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#12324a",
          light: "#1d4f73",
          dark: "#091b2a",
        },
        accent: {
          DEFAULT: "#0f766e",
          light: "#14b8a6",
        },
        surface: {
          light: "#f6f8fb",
          dark: "#0b1320",
          card: "#162235",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
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
