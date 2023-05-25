/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './public/**/**/*.js',
    './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'body': '#083344',
        'selected-text': '#fef3c7',
        'theme': '#0369a1',
        'nav': '#fef3c7',
        'secondary': '#a78bfa',
        'badge': '#3f3f46',
        'input-border': '#a78bfa',
        'input': '#1c1917'
      },
      fontFamily: {
        'intervar': ["'Inter var'", 'sans-serif']
      }
    },
  },
  plugins: [],
}