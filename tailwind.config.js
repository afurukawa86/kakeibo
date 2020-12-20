module.exports = {
  purge: [
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '0': '0 1 12%',
        '1': '1 1 0%',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        'fredoka': 'Fredoka One',
      },
      height: {
        'screen-1': 'calc(100vh - 2.5rem)',
      },
      textColor: {
        'color-logo': '#3F51B5',
      },
      backgroundColor: theme => ({
        'preto-fundo': '#282A36',
        'preto-sidebar': '#22222C',
        'preto-header': '#191923',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
