/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#760404',
        'brand-secondary': '#cbae37',
        maintext: `rgb(241,245,249)`,
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
