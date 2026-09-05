/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Distinctive color palette inspired by Filipino snacks
        'snackhouse-primary': '#C75B39',      // Warm terracotta (clay pots, baked goods)
        'snackhouse-secondary': '#6B8E23',    // Pandan green (fresh ingredients)
        'snackhouse-accent': '#D4AF37',       // Golden wheat (fried snacks, sweet treats)
        'snackhouse-cream': '#F8F6F3',        // Warm cream background
        'snackhouse-brown': '#3E2723',        // Deep brown for text
        'snackhouse-gray': '#8D6E63',         // Warm gray for secondary text
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'snack': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'snack-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '200': '200ms',
      }
    },
  },
  plugins: [],
}