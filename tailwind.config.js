/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'Bri': ['Bricolage'],
        'Ae-Bold': ['AeBold'],
        'Ae-Reg': ['AeReg'],
      },
      colors: {
        Secondary: '#F4F3F3',
        Primary: '#00845F',
      },
    },
  },
  plugins: [],
}

