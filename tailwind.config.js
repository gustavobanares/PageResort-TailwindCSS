/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul':{
          100: '#686de0',
          200: '#4834d4',
          300: '#30336b',
          400: '#130f40',
        },
      },
    },

  },
  plugins: [],
}

