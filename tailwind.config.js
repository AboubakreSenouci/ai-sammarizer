/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      md: { max: '800px' },
      lg: { max: '1279px' },
      xl: { max: '1535px' },
      }
    },
  },
  plugins: [],
}

