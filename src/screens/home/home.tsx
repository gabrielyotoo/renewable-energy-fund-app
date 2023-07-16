import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { MainStackParamList } from '@app/main-navigator';
import { FundPreview } from '@app/models/fund';
import Fund from '@components/fund';
import Text from '@components/text';

import styles from './home.style';

type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
const funds: FundPreview[] = [
  {
    id: '1',
    priceChange: data,
    amount: 1234,
    name: 'Biomass Fund',
    priceChangePercentage: 1.4,
    priceDifferent: 'up',
    type: 'biomass',
  },
  {
    id: '2',
    priceChange: data,
    amount: 53429,
    name: 'Wind Fund',
    priceChangePercentage: 4,
    priceDifferent: 'up',
    type: 'wind',
  },
  {
    id: '3',
    priceChange: data,
    amount: 95,
    name: 'Sun Fund',
    priceChangePercentage: 9.53,
    priceDifferent: 'down',
    type: 'sun',
  },
  {
    id: '4',
    priceChange: data,
    amount: 484,
    name: 'Hydroelectric Fund',
    priceChangePercentage: 11,
    priceDifferent: 'up',
    type: 'hydroelectric',
  },
  {
    id: '5',
    priceChange: data,
    amount: 865,
    name: 'Geothermal Fund',
    priceChangePercentage: 0.72,
    priceDifferent: 'down',
    type: 'geothermal',
  },
];

const Home = ({ navigation }: HomeProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.screen}>
      <Text bold style={styles.funds}>
        {t('screens.home.funds')}
      </Text>
      <FlatList
        data={funds}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}
          >
            <Fund {...item} />
          </TouchableOpacity>
        )}
        horizontal
        style={styles.fundsList}
        contentContainerStyle={styles.fundsListContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
