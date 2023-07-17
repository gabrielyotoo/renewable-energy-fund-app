import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { MainStackParamList } from '@app/routes/main-navigator';
import Button from '@components/button';
import Text from '@components/text';

import SuccessIcon from '@assets/success.svg';

import styles from './success.style';

type SuccessProps = NativeStackScreenProps<MainStackParamList, 'Success'>;

const Success = ({
  navigation,
  route: {
    params: { message },
  },
}: SuccessProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.screen}>
      <View style={{ flex: 1 }} />
      <SuccessIcon width={120} height={120} style={styles.icon} />
      <Text bold size="h3" style={styles.text}>
        {message}
      </Text>
      <Button
        title={t('screens.success.continue')}
        onPress={() => navigation.reset({ routes: [{ name: 'HomeTabBar' }] })}
      />
    </View>
  );
};

export default Success;
