/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Custom font family
      },
      colors: {
        'purple-400': '#A78BFA', // Example custom color
        'purple-600': '#7C3AED',
        'purple-700': '#6D28D9',
        // Add more custom colors if needed
      }
    },
  },
  plugins: [],
}
