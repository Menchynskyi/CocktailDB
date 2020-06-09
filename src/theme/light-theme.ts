import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  fontFamily: {
    regular: 'Roboto',
    medium: 'RobotoMedium',
    bold: 'RobotoBold',
  },
  colors: {
    background: {
      primary: '#FFFFFF',
      secondary: '#272727',
    },
    text: {
      primary: '#000000',
      secondary: '#7E7E7E',
    },
  },
  fontSize: {
    heading: {
      regular: '24px',
    },
    text: {
      small: '14px',
      regular: '16px',
    },
  },
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};
