import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import {
  View,
  TextInput as ReactNativeTextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { MainStackParamList } from '@app/routes/main-navigator';
import Button from '@components/button';
import Radio from '@components/radio';
import Text from '@components/text';
import TextInput from '@components/text-input';

import styles from './register.style';

type RegisterProps = NativeStackScreenProps<MainStackParamList, 'Register'>;

const Register = ({ navigation }: RegisterProps) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      termsAgree: false,
    },
  });

  const lastNameInput = useRef<ReactNativeTextInput>(null);
  const emailInput = useRef<ReactNativeTextInput>(null);
  const passwordInput = useRef<ReactNativeTextInput>(null);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleRegister = handleSubmit(() => {
    reset();
    navigation.navigate('Success', { message: t('screens.register.success') });
  });

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.screenContent}
      keyboardShouldPersistTaps="handled"
    >
      <Controller
        control={control}
        rules={{ required: t('screens.register.firstName.error') }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextInput
            label={t('screens.register.firstName.label')}
            placeholder={t('screens.register.firstName.placeholder')}
            error={error}
            value={value}
            onChangeText={onChange}
            autoCapitalize="words"
            textContentType="givenName"
            autoComplete="name-given"
            returnKeyType="next"
            onSubmitEditing={() => lastNameInput.current?.focus()}
          />
        )}
        name="firstName"
      />
      <Controller
        control={control}
        rules={{ required: t('screens.register.lastName.error') }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextInput
            ref={lastNameInput}
            label={t('screens.register.lastName.label')}
            placeholder={t('screens.register.lastName.placeholder')}
            error={error}
            value={value}
            onChangeText={onChange}
            autoCapitalize="words"
            textContentType="familyName"
            autoComplete="name-family"
            returnKeyType="next"
            onSubmitEditing={() => emailInput.current?.focus()}
          />
        )}
        name="lastName"
      />
      <Controller
        control={control}
        rules={{
          required: t('screens.register.email.error'),
          pattern: {
            value:
              // eslint-disable-next-line security/detect-unsafe-regex
              /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
            message: t('screens.register.email.error'),
          },
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextInput
            ref={emailInput}
            label={t('screens.register.email.label')}
            placeholder={t('screens.register.email.placeholder')}
            error={error}
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            autoComplete="email"
            textContentType="emailAddress"
            returnKeyType="next"
            onSubmitEditing={() => passwordInput.current?.focus()}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: t('screens.register.password.error.required'),
          minLength: {
            message: t('screens.register.password.error.minLength'),
            value: 8,
          },
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextInput
            ref={passwordInput}
            label={t('screens.register.password.label')}
            placeholder={t('screens.register.password.placeholder')}
            secureTextEntry={isPasswordHidden}
            onPressPasswordEye={() => setIsPasswordHidden(!isPasswordHidden)}
            error={error}
            value={value}
            onChangeText={onChange}
            textContentType="newPassword"
            returnKeyType="done"
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: t('screens.register.termsAgree.error'),
          },
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <Radio value={value} onChange={onChange} style={styles.radio}>
              <Text>
                <Trans i18nKey="screens.register.termsAgree.label">
                  I am over 18 years of age and I have read and agree to the{' '}
                  <Text bold>Terms of Service</Text> and{' '}
                  <Text bold>Privacy Policy</Text>.
                </Trans>
              </Text>
            </Radio>
            <Text type="error" style={styles.agreeError}>
              {error?.message}
            </Text>
          </>
        )}
        name="termsAgree"
      />
      <Button
        title={t('screens.register.register')}
        onPress={handleRegister}
        disabled={
          !dirtyFields.email ||
          !dirtyFields.password ||
          !dirtyFields.firstName ||
          !dirtyFields.lastName ||
          !getValues().termsAgree
        }
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.login}>
          <Trans i18nKey={'screens.register.login'}>
            Already have an account?{' '}
            <Text style={styles.loginLink}>Log in here</Text>
          </Trans>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;
