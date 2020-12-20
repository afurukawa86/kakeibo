module.exports = {
  purge: ['./src/pages/**/*.js', './srv/components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '0': '0 1 15%',
        '1': '1 1 0%',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        'fredoka': 'Fredoka One',
      },
      height: {
        'screen-1': 'calc(100vh - 4rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
