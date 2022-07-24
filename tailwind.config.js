/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeFromBotton: 'fadeFromBotton 0.8s ease-in-out',
        fadeFromBottonWithDelay: 'fadeFromBottomWithDelay 1.6s ease-in-out',
      },
      keyframes: {
        fadeFromBotton: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeFromBottomWithDelay: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '50%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
