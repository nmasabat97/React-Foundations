/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', //mention this so that theme change works on the basis of class and not system settings
  theme: {
    extend: {},
  },
  plugins: [],
}

