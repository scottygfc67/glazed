/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'glazed-blue': '#2563eb',
        'glazed-pink': '#ec4899',
        'glazed-yellow': '#f59e0b',
        'glazed-orange': '#f97316',
      },
    },
  },
  plugins: [],
}
