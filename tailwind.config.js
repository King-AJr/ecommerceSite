/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          "02": '#F3F5F7',
          "04": '#6C7275',
          "05": '#343839',
          "07": '#141718',
          "dark-blue": "#171D28",
        },
        grey: '#EBEEF6',
        green: "#38CB89",
        myBlue: "#377DFF",
      },
      fontFamily: {
        poppins: ['Poppins'],
        grotesk: ['Space Grotesk'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

