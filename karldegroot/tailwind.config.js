/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xsm:"360px",
      sm: '480px',
      md: '768px',
      mdl: '800px',
      lg: '1028px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        "julius-sans-one": ["Julius Sans One", "sans serif"]
      },
      colors:{
        "pink-kd":"#7F1C55",
        "footer" : "#242424"
      },
      height:{
        "button": "24px",
        "card" : "400px",
        "home-hero": "80rem",
        "page-header": "300px"
      },
      width: {
        "button": "100px",
        "card" : "300px"
      }
    },
  },
  plugins: [],
}
