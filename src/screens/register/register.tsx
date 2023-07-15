import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import { MainStackParamList } from '@app/main-navigator';

type RegisterProps = NativeStackScreenProps<MainStackParamList, 'Register'>;

const Register = ({ navigation }: RegisterProps) => (
  <View>
    <Text>Register</Text>
  </View>
);

export default Register;
