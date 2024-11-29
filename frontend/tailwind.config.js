/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "custom-gray": "orange",
        "custom-purple": "#3D52A0",
      },
      keyframes: {
        "opacity-animate": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        opacity: "opacity-animate 0.2s ease-out",
      },
    },
  },
};
