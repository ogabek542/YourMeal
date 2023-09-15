/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        numb:{
          100:"#000",
          200:"#FFAB08",
          300:"#FF7020",
        },
        grays:{
          100:"#f9f9f9",
          200:"#f2f2f3",
          300:"#B1B1B1",
        },
        save:{
          100:"#fff",
        }
      },
      fontFamily:{
          nunito:["Nunito"],
      },
      images:{

      },
      extend:{
        height:{
          '1': '32rem',
          '2': '12px',
          '3': '16px',
          '4': '24px',
          '5': '32px',
          '6': '48px',
        },
      },
      borderRadius:{

      },
    },
  },
  plugins: [],
}