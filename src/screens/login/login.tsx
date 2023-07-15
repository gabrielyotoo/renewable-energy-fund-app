import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { MainStackParamList } from '@app/main-navigator';
import Text from '@components/text';
import TextInput from '@components/text-input';

type LoginProps = NativeStackScreenProps<MainStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
  const { t } = useTranslation();

  return (
    <View>
      <Text size="h2" bold>
        {t('screens.login.title')}
      </Text>
      <TextInput label="E-mail" />
    </View>
  );
};

export default Login;
