/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#f3f1e8",
        olive: "#34392b",
        tealFrame: "#7fb3bb",
        mustard: "#f7c64a",
        lime: "#e9ef60",
        red: "#e33b2f",
      },
      fontFamily: {
        sans: ["'Arimo'", "sans-serif"],
      },
      boxShadow: {
        nav: "0 1px 4px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
