/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-black': '#191919',
        'light-black': '#101010',
        grey: '#f1f1f1',
        'light-gray': '#fafafa',
        orange: '#d87d4a',
        'light-orange': '#fbaf85',
        'light-white': '#fcfcfc',
        'dark-gray': '#1b1c1f'
      }
    },
  },
  plugins: [],
}
