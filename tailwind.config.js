/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage :{
            'hero': "url('./src/assets/homepage_image.png')",
        },
        fontFamily:{
            'overlock': ['Overlock', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

