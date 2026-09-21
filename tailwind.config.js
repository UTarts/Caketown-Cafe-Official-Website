/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        caketown: {
          black: '#111111',
          white: '#FFFFFF',
          cream: '#FFF7EE',
          orange: '#F47A1F',
          'orange-dark': '#D96A15',
          cherry: '#E43838',
          chocolate: '#4A2418',
          peach: '#FFDCCB',
          'peach-light': '#FFE9DE',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter-2': '-0.03em',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'draw': 'draw 2s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
