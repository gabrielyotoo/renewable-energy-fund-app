import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { getFundsPreview } from '@app/api/home';
import { useAppDispatch } from '@app/hooks/useAppDispatch';
import { useAppSelector } from '@app/hooks/useAppSelector';
import { setFunds } from '@app/redux/slices/home';
import { HomeTabBarParamList } from '@app/routes/home-tabbar';
import { MainStackParamList } from '@app/routes/main-navigator';
import Banner from '@components/banner';
import Fund from '@components/fund';
import Text from '@components/text';

import Environment from '@assets/environment.svg';

import styles from './home.style';

type HomeProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabBarParamList, 'Home'>,
  NativeStackScreenProps<MainStackParamList, 'HomeTabBar'>
>;

const Home = ({ navigation }: HomeProps) => {
  const { t } = useTranslation();
  const { funds } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setFunds(await getFundsPreview()));
    })().catch((_) => {});
  }, [dispatch]);

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
            onPress={() =>
              navigation.navigate('FundDetails', {
                fundId: item.id,
              })
            }
          >
            <Fund {...item} />
          </TouchableOpacity>
        )}
        horizontal
        style={styles.fundsList}
        contentContainerStyle={styles.fundsListContainer}
        showsHorizontalScrollIndicator={false}
      />
      <Banner
        style={styles.banner}
        title={t('screens.home.banner.title')}
        subtitle={t('screens.home.banner.subtitle')}
        image={<Environment width={60} height={60} />}
      />
    </View>
  );
};

export default Home;
