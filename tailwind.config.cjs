/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


const customAnimation = {
  keyframes: {
    'delayed-fade': {
      '0%, 99.9%': { opacity: 1 },
      '100%': { opacity: 0 },
    },
  },
  animation: {
    'delayed-fade': 'delayed-fade 6000ms step-end',
  },
};

 
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
      animation: customAnimation.animation,
      keyframes: customAnimation.keyframes,
      colors:{
        primary:"#710AFC",
        lightPrimary:"#242EF21A",
        secondary:"#1D9CD7",
        grey:"#7F7F7F",
        greyLight:"#5B5959",
        green:"#249B2C",
        lightGreen:"#D4F9CE",
        darkMode:"#15171E",
      }
    },
  },
  plugins: [],
});


