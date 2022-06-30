/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      "white": "#ffffff",
      "light-gray": "#d6e2f0",
      "grayish-blue": "#7b879d",
      "dark-blue": "#1f3251",      
    },
    extend: {},
  },
  plugins: [],
}
