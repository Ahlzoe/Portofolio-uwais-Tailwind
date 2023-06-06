/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#0d9488',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },

    },
  },
  plugins: [],
}

