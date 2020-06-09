import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      skeleton: string;
    };
    fontFamily: {
      regular: string;
      medium: string;
      bold: string;
    };
    fontSize: {
      heading: {
        regular: string;
      };
      text: {
        small: string;
        regular: string;
      };
    };
    boxShadow: string;
  }
}
