/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  darkMode: "selector",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#710AFC",
        lightPrimary:"#242EF21A",
        secondary:"#1D9CD7",
        grey:"#7F7F7F",
        green:"#249B2C",
        lightGreen:"#D4F9CE",
        darkMode:"#15171E",
      }
    },
  },
  plugins: [],
});


