export const theme = {
  colors: {
    dark: {
      'background': 'hsl(209, 23%, 22%)',
      'foreground': 'hsl(207, 26%, 17%)',
      'text': 'hsl(0, 0%, 100%)',
      'secondary-text': 'hsl(0, 0%, 85%)'
    },
    light: {
      'background': 'hsl(0, 0%, 100%)',
      'foreground': 'hsl(0, 0%, 95%)',
      'text': 'hsl(200, 15%, 8%)',
      'secondary-text': 'hsl(0, 0%, 52%)',
    },
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