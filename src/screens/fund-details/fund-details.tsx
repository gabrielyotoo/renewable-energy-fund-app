import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { MainStackParamList } from '@app/routes/main-navigator';
import Banner from '@components/banner';
import Fund from '@components/fund';
import Text from '@components/text';

import Environment from '@assets/environment.svg';

import styles from './fund-details.style';

type FundDetailsProps = NativeStackScreenProps<
  MainStackParamList,
  'FundDetails'
>;

const FundDetails = ({ navigation, route }: FundDetailsProps) => {
  const { t } = useTranslation();
  const {
    params: { fundId },
  } = route;

  return (
    <View style={styles.screen}>
      <Text bold style={styles.funds}>
        {t('screens.fundDetails.funds')}
      </Text>
    </View>
  );
};

export default FundDetails;
