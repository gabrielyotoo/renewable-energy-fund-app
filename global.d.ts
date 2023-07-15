import 'i18next';
import ptbr from '@app/i18n/enus';
import { mainTheme } from '@app/theme';

declare module '@react-navigation/native' {
  export type AppTheme = typeof mainTheme;
  export function useTheme(): AppTheme;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'pt-BR';
    // custom resources type
    resources: {
      'pt-BR': typeof ptbr;
    };
  }
}
