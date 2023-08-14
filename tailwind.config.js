/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.vue'
  ],
  theme: {
    fontFamily: {
      'sans': ['"Nunito Sans"', 'Arial', '-apple-system', 'BlinkMacSystemFont',],
    },
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.300')
      }),
      colors: {
        primary: {
          DEFAULT: '#F58F00',
          light: '#FFBB5C',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}