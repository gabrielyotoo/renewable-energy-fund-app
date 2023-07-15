/* eslint-disable security/detect-object-injection */
import { useMemo } from 'react';
import {
  Text as ReactNativeText,
  TextProps as ReactNativeTextProps,
} from 'react-native';

import styles from './text.style';

type TextProps = ReactNativeTextProps & {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  bold?: boolean;
};

const Text = ({ size = 'h5', style, bold = false, ...props }: TextProps) => {
  const fontSize = useMemo(
    () =>
      ({
        h1: 30,
        h2: 26,
        h3: 22,
        h4: 18,
        h5: 14,
        h6: 12,
      }[size]),
    [size]
  );

  const fontFamily = useMemo(
    () => (bold ? 'Montserrat-Bold' : 'Montserrat-Medium'),
    [bold]
  );

  return (
    <ReactNativeText
      style={[styles.text, { fontSize, fontFamily }, style]}
      {...props}
    />
  );
};

export default Text;
