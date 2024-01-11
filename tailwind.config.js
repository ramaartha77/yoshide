/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        OpenSans: "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [
     require('tailwindcss-animated')
  ],
}
