const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['"Laca Text"', ...defaultTheme.fontFamily.sans],
      serif: ['Laca', ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal: {
        light: '#AFE1E2',
        DEFAULT: '#AFE1E2',
        dark: '#77DBDB',
      },
      blue: {
        light: '#48AAED',
        DEFAULT: '#48AAED',
        dark: '#124168',
      },
      green: {
        DEFAULT: '#5F7772',
      },
      pink: {
        DEFAULT: '#FCB3B1',
      },
      red: {
        DEFAULT: '#9E5F5F',
      },
      white: {
        DEFAULT: '#FFFFFF',
        dark: '#F7FBF9',
      },
      black: colors.black,
      gray: colors.trueGray,
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
