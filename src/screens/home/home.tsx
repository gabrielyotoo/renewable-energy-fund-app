import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';

import { useAppDispatch } from '@app/hooks/useAppDispatch';
import { useAppSelector } from '@app/hooks/useAppSelector';
import { fetchFunds } from '@app/redux/slices/home';
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
  const { colors } = useTheme();
  const { funds, loading } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFunds()).catch((_) => {});
  }, [dispatch]);

  return (
    <ScrollView
      style={styles.screen}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor={colors.primary}
          colors={[colors.primary]}
          onRefresh={() => dispatch(fetchFunds())}
        />
      }
    >
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
    </ScrollView>
  );
};

export default Home;
