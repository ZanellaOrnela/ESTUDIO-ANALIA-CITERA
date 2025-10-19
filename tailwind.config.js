/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['var(--font-cinzel)', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F2F2F2',
          100: '#E8E8E8',
          500: '#0F2D49',
          600: '#0C2440',
          700: '#0A1F36',
        },
        secondary: {
          50: '#F2F2F2',
          100: '#E8E8E8',
          500: '#D9C896',
          600: '#C4B082',
          700: '#B09A6E',
        },
        accent: {
          50: '#F2F2F2',
          100: '#E8E8E8',
          500: '#D9C896',
          600: '#C4B082',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
