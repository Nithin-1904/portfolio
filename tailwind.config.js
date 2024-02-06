/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        'sm':'480px'
      },
      colors:{
        'mustard' : '#feaf1f',
        'lblue' : '#1f6efe',
      }
    },
  },
  fontFamily:{
    roboto: ['Roboto Slab', 'serif']
  },
  plugins: [],
}

