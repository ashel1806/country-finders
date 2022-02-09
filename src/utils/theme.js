export const theme = {
  colors: {
    dark: {
      'dark-blue': 'hsl(209, 23%, 22%)',
      'very-dark-blue': 'hsl(207, 26%, 17%)',
    },
    light: {
      'very-dark-blue': 'hsl(200, 15%, 8%)',
      'dark-gray': 'hsl(0, 0%, 52%)',
      'very-dark-gray': 'hsl(0, 0%, 98%)'
    },
    'white': 'hsl(0, 0%, 100%)'
  },
  fontSizes: {
    'homepage': '14px',
    'detail': '16px'
  },
  fontWeights: {
    'normal': 300,
    'bold': 600,
    'extra-bold': 800
  },
  screens: {
    'mobile': '375px',
    'desktop': '1440px'
  },
};

const screenSizes = {
  mobile: '375px',
  mobileM: '750px',
  large: '1100px',
  desktop: '1440px'
};

export const devices = {
  mobile: `(min-width: ${screenSizes.mobile})`,
  mobileM: `(min-width: ${screenSizes.mobileM})`,
  large: `(min-width: ${screenSizes.large})`,
  desktop: `(min-width: ${screenSizes.desktop})`
};