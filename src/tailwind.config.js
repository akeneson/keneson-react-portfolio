module.exports = {
  theme: {
    backgroundColor: theme=> ({
      ...theme('colors'),
      'primary': 'bg-pink-50',
      'secondary': 'bg-indigo-900',
      'danger': 'bg-white'
    })
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
