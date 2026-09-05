/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'snackhouse-brown': '#C75B39',
        'snackhouse-orange': '#D4AF37',
        'snackhouse-cream': '#F8F6F3',
      },
    },
  },
  plugins: [],
}