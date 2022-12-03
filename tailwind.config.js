/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        roboto: ["'Roboto Slab'", "sans-serif"],
      },
      textColor: {
        "color-dark": "#222F3E",
        "color-gray": "#828B9A",
        "color-orange": "#FF9F26",
      },
      borderColor: {
        "color-orange": "#FF9F26",
        "color-gray": "#828B9A",
      },
      backgroundColor: {
        "color-orange": "#FF9F26",
        "color-white-light": "#F5F8FE",
      },
      boxShadow: {
        "box-shadow": "0 0 25px #94969c26",
      },
    },
  },
  plugins: [],
};
