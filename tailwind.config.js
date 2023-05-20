/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#E30613',
          700: '#72111D',
        },
        secondary: {
          400: '#1D1B93',
        },
        tertiary: {
          400: '#FFCE41',
          700: '#E5A80E',
        },
      },
      gray: {
        400: '#D2D2D2',
      },
      screens: {
        ml: '865px',
        '1.5xl': '1400px',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
