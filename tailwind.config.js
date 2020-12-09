const theme = require("./src/tokens");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: theme.colors,
    fontFamily: theme.fontFamily,
    fontSizes: theme.fontSize,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
