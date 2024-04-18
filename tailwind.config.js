/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        darkGreen: '#3A643B', 
      },
      boxShadow: {
        'shadow': '0px 4px 12.5px 0px #00000012;'
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins :["poppins","sans-serif"],
        inter:["inter","sans-serif"],
        rounded:["m-plus rounded 1c","sans-serif"],
        verola:['varela round'],
      },
    },
  },
  plugins: [],
}

