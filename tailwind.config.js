const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--primary-font)', ...fontFamily.sans],
        primary: ['var(--primary-font)', ...fontFamily.sans],
        serif: ['var(--serif-font)', ...fontFamily.serif],
        mono: ['var(--mono-font)', ...fontFamily.mono],
      },
    }
  },
  plugins: [require('@tailwindcss/typography')],
}