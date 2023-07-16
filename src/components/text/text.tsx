/* eslint-disable security/detect-object-injection */
import { useTheme } from '@react-navigation/native';
import { useMemo } from 'react';
import {
  Text as ReactNativeText,
  TextProps as ReactNativeTextProps,
} from 'react-native';

import styles from './text.style';

type TextProps = ReactNativeTextProps & {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  bold?: boolean;
  type?: 'regular' | 'info' | 'warn' | 'error' | 'success' | 'accent' | 'ghost';
};

const Text = ({
  size = 'h5',
  style,
  type = 'regular',
  bold = false,
  ...props
}: TextProps) => {
  const { colors } = useTheme();

  const fontSize = useMemo(
    () =>
      ({
        h1: 28,
        h2: 24,
        h3: 18,
        h4: 16,
        h5: 14,
        h6: 12,
      }[size]),
    [size]
  );

  const fontFamily = useMemo(
    () => (bold ? 'Montserrat-Bold' : 'Montserrat-Medium'),
    [bold]
  );

  const color = useMemo(() => colors.texts[type], [colors.texts, type]);

  return (
    <ReactNativeText
      style={[styles.text, { fontSize, fontFamily, color }, style]}
      {...props}
    />
  );
};

export default Text;
