/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'heading':'Boogaloo", Sans-serif'
    },
    extend: {
      backgroundImage: {
        // 'second-section': "url('./src/assets/second-section.jpg')",
      },
    },
  },
  plugins: [],
}