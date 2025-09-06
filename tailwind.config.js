/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        glz: {
          blue: '#29B7E6',
          'blue-50': '#E6F7FF',
          honey: '#F4B400',
          cream: '#FFF4DC',
          rose: '#FF3B8D',
        },
        ink: '#101418',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
