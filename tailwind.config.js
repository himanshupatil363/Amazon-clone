const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange:colors.orange
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
