/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heartBeat: {
          "0%": { transform: "scale(1);" },
          "100%": { transform: "scale(.97);" },
        },
      },
      animation: {
        heartBeat: "heartBeat .35s infinite ease-in-out alternate",
      },
    },
    colors: {
      gold: "#FFD700",
      goldText: "#E0AA3E",
      brown: "#421B00",
      white: "#FFFFFF",
      sienna: "#A0522D",
      active: "#a3461b",
    },
  },
  plugins: [],
};
