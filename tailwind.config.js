/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", 
  './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'dark-gray':'#707070',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#F3DE1B',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
    },
      backgroundImage: {
        Hero:"url('./Images/hero-section.png')",
      },
      },
  },
  plugins: [ require('tw-elements/dist/plugin')],
}
