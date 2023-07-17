import { DefaultTheme, Theme } from '@react-navigation/native';

interface AppTheme extends Theme {
  colors: Theme['colors'] & {
    inactive: string;
    textInput: string;
    ghostedText: string;
    textOnPrimary: string;
    texts: {
      success: string;
      warn: string;
      regular: string;
      info: string;
      error: string;
      accent: string;
      ghost: string;
    };
  };
}

export const mainTheme: AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#770FDF',
    textOnPrimary: '#ffffff',
    text: '#262626',
    inactive: '#b0b0b0',
    background: '#ffffff',
    textInput: '#F4F4F4',
    ghostedText: '#A0A0A0',
    texts: {
      success: '#0FDF8F',
      warn: '#F0A719',
      regular: '#262626',
      info: '#77A6DC',
      error: '#EE8688',
      accent: '#770FDF',
      ghost: '#A0A0A0',
    },
  },
  dark: false,
};
