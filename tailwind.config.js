/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      // remember in details when we use
      gridTemplateColumns: {
        '70/30': '70%b 28%',
      },
    },
  },
  plugins: [],
}
