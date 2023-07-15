import { DefaultTheme, Theme } from '@react-navigation/native';

interface AppTheme extends Theme {
  colors: Theme['colors'] & {
    inactive: string;
    textInput: string;
  };
}

export const mainTheme: AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#770FDF',
    text: '#262626',
    inactive: '#b0b0b0',
    background: '#ffffff',
    textInput: '#F4F4F4',
  },
  dark: false,
};
