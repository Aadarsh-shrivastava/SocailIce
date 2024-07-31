const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#202421',
  white: '#F0F2F3',
  grey: '#aeb1b5',
  blue: '#4182b0',
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.blue,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    inactive: palette.grey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};
