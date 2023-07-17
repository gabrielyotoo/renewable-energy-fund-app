import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import {
  ScrollView,
  TextInput as ReactNativeTextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import { MainStackParamList } from '@app/routes/main-navigator';
import Button from '@components/button';
import Text from '@components/text';
import TextInput from '@components/text-input';

import styles from './login.style';

type LoginProps = NativeStackScreenProps<MainStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { t } = useTranslation();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const passwordInput = useRef<ReactNativeTextInput>(null);

  const handleLogin = handleSubmit(() => {
    reset();
    navigation.replace('HomeTabBar', {
      screen: 'Home',
    });
  });

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.screenContent}
      keyboardShouldPersistTaps="handled"
    >
      <Text size="h2" bold style={styles.title}>
        {t('screens.login.title')}
      </Text>
      <Controller
        control={control}
        rules={{
          required: t('screens.login.email.error'),
          pattern: {
            value:
              // eslint-disable-next-line security/detect-unsafe-regex
              /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
            message: t('screens.login.email.error'),
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            label={t('screens.login.email.label')}
            placeholder={t('screens.login.email.placeholder')}
            error={error}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            returnKeyType="next"
            onSubmitEditing={() => passwordInput.current?.focus()}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            ref={passwordInput}
            secureTextEntry={isPasswordHidden}
            onPressPasswordEye={() => setIsPasswordHidden(!isPasswordHidden)}
            label={t('screens.login.password.label')}
            placeholder={t('screens.login.password.placeholder')}
            onChangeText={onChange}
            value={value}
            textContentType="password"
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />
        )}
        name="password"
      />
      <Button
        title={t('screens.login.login')}
        style={styles.button}
        onPress={handleLogin}
        disabled={!dirtyFields.email || !dirtyFields.password}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={handleSignUp}>
        <Text style={styles.noAccount}>
          <Trans i18nKey="screens.login.noAccount">
            Don't have an account?{' '}
            <Text style={styles.noAccountLink}>Sign up</Text> here
          </Trans>
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
    </ScrollView>
  );
};

export default Login;
