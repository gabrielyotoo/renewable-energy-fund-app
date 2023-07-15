import { useTheme } from '@react-navigation/native';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import {
  TextInput as ReactNativeTextInput,
  TextInputProps as ReactNativeTextInputProps,
  View,
} from 'react-native';

import Text from '@components/text';

import styles from './text-input.style';

type TextInputProps = ReactNativeTextInputProps & {
  label: string;
  error?: FieldError | undefined;
};

const TextInput = forwardRef<ReactNativeTextInput, TextInputProps>(
  ({ label, style, error, ...props }, ref) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
        <Text style={{ color: colors.ghostedText }}>{label}</Text>
        <ReactNativeTextInput
          ref={ref}
          style={[
            styles.textInput,
            { backgroundColor: colors.textInput },
            style,
          ]}
          {...props}
        />
        {error ? (
          <Text size="h5" type="error">
            {error.message}
          </Text>
        ) : null}
      </View>
    );
  }
);

export default TextInput;
