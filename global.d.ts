import 'i18next';
import enus from '@app/i18n/enus';
import { mainTheme } from '@app/theme';

declare module '@react-navigation/native' {
  export type AppTheme = typeof mainTheme;
  export function useTheme(): AppTheme;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en-US';
    // custom resources type
    resources: {
      'en-US': typeof enus;
    };
  }
}
