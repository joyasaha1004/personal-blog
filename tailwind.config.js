/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: '300px',
      md: '500px',
      lg: '700px',
      xl: '1000px',
      xxl: '1280px',
       
    },

    fontFamily: {
      sans: ['Sacramento', 'sans-serif'],
      serif: ['Roboto', 'serif'],
      satisfy:['"Satisfy", cursive']
    },
    extend: {},
  },
  plugins: [],
}

