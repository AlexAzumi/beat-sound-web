/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeFromBotton: 'fadeFromBotton 1s ease-in-out',
        fadeFromBotton1secDelay:
          'fadeFromBotton 1s ease-in-out 1s normal forwards',
      },
      keyframes: {
        fadeFromBotton: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
