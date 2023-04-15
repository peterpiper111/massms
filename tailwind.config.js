/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'pop' : 'Poppins',
      },
      width:{
        '128' : '120px',
      },
      fontWeight:{
        'ultrabold' : '1000'
      }
    },
  },
  plugins: [],
}

