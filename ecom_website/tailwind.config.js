/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode:"class",
  theme: {
    extend: {
      color:{
        primary: "yellow-900", // bg-purple-900
        secondary: "slate", // bg-black
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm:"3rem",
         
        }
      }
    },
  },
  plugins: [],
}

