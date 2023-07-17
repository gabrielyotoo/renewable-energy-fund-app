import { useTheme } from '@react-navigation/native';
import {
  View,
  TouchableNativeFeedbackProps,
  TouchableNativeFeedback,
  TextStyle,
} from 'react-native';

import Text from '@components/text';

import styles from './button.style';

type ButtonProps = TouchableNativeFeedbackProps & {
  title: string;
  textStyle?: TextStyle;
};

const Button = ({
  title,
  style,
  disabled,
  textStyle,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <TouchableNativeFeedback {...props} disabled={disabled}>
      <View
        style={[
          styles.button,
          { backgroundColor: disabled ? colors.inactive : colors.primary },
          style,
        ]}
      >
        <Text size="h4" style={[{ color: colors.textOnPrimary }, textStyle]}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
