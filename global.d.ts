import { mainTheme } from '@app/theme';

declare module '@react-navigation/native' {
  export type AppTheme = typeof mainTheme;
  export function useTheme(): AppTheme;
}
