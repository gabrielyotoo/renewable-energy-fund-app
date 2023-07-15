import {
  TextInput as ReactNativeTextInput,
  TextInputProps as ReactNativeTextInputProps,
  View,
} from 'react-native';

import Text from '@components/text';

import styles from './text-input.style';

type TextInputProps = ReactNativeTextInputProps & {
  label: string;
};

const TextInput = ({ label, ...props }: TextInputProps) => (
  <View style={styles.container}>
    <Text>{label}</Text>
    <ReactNativeTextInput {...props} />
  </View>
);

export default TextInput;
