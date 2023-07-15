import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import { MainStackParamList } from '@app/main-navigator';

type LoginProps = NativeStackScreenProps<MainStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => (
  <View>
    <Text>Login</Text>
  </View>
);

export default Login;
