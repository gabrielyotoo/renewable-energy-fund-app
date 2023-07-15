import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import { MainStackParamList } from '@app/main-navigator';

type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => (
  <View>
    <Text>Home</Text>
  </View>
);

export default Home;
