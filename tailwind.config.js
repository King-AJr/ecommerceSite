/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ABA1A',
        grey: '#EBEEF6',
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

