/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#f1faee',
        'white': '#ffffff',
        'black': '#000000',
        'primary': '#6B21A8',
        'danger': '#dc2626',
        'shadow': '#e9d5ff',
        'desc': '#6b7280',
      }
    }
  },
  plugins: [],
}
