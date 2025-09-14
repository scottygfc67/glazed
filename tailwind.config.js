/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'var(--brand-blue-50)',
          100: 'var(--brand-blue-100)',
          200: 'var(--brand-blue-200)',
          300: 'var(--brand-blue-300)',
          400: 'var(--brand-blue-400)',
          500: 'var(--brand-blue-500)',
          600: 'var(--brand-blue-600)',
          700: 'var(--brand-blue-700)',
          800: 'var(--brand-blue-800)',
          900: 'var(--brand-blue-900)',
        },
        pink: {
          50: 'var(--brand-pink-50)',
          100: 'var(--brand-pink-100)',
          200: 'var(--brand-pink-200)',
          300: 'var(--brand-pink-300)',
          400: 'var(--brand-pink-400)',
          500: 'var(--brand-pink-500)',
          600: 'var(--brand-pink-600)',
          700: 'var(--brand-pink-700)',
          800: 'var(--brand-pink-800)',
          900: 'var(--brand-pink-900)',
        },
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
      },
      borderRadius: {
        xl: 'var(--radius-xl)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif'],
        ui: ['var(--font-ui)', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
}