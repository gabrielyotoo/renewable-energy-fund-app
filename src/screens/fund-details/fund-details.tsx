/* eslint-disable security/detect-object-injection */
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DateTime } from 'luxon';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RefreshControl, ScrollView, View } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

import { useAppDispatch } from '@app/hooks/useAppDispatch';
import { useAppSelector } from '@app/hooks/useAppSelector';
import { fetchFundDetails } from '@app/redux/slices/fund';
import { MainStackParamList } from '@app/routes/main-navigator';
import FundBreakdown from '@components/fund-breakdown';
import FundDetailInfo from '@components/fund-detail-info';
import Text from '@components/text';

import styles from './fund-details.style';

type FundDetailsProps = NativeStackScreenProps<
  MainStackParamList,
  'FundDetails'
>;

const FundDetails = ({ route }: FundDetailsProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const {
    params: { fundId },
  } = route;
  const { loading, detail } = useAppSelector((state) => state.fund);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFundDetails(fundId)).catch((_) => {});
  }, [dispatch, fundId]);

  if (!detail) {
    return null;
  }
  const priceColorType = detail.priceDifferent === 'down' ? 'error' : 'success';

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor={colors.primary}
          colors={[colors.primary]}
          onRefresh={() => dispatch(fetchFundDetails(fundId))}
        />
      }
    >
      <View style={styles.header}>
        <View>
          <Text bold size="h2">
            {t('formatter.currency', { value: detail.amount })}
          </Text>
          <Text size="h4" type={priceColorType}>
            {t('formatter.percentage', { value: detail.priceChangePercentage })}
          </Text>
        </View>
        <Text size="h3" bold>
          {DateTime.now().year}
        </Text>
      </View>
      <LineChart
        style={styles.chart}
        data={detail.priceChange}
        svg={{
          stroke: colors.texts[priceColorType],
          strokeWidth: 2,
        }}
      />
      <FundDetailInfo detail={detail} />
      <FundBreakdown detail={detail} />
    </ScrollView>
  );
};

export default FundDetails;
