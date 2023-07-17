/* eslint-disable security/detect-object-injection */
import { useTheme } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import { LineChart } from 'react-native-svg-charts';

import { useAppDispatch } from '@app/hooks/useAppDispatch';
import { useAppSelector } from '@app/hooks/useAppSelector';
import { fetchFundDetails } from '@app/redux/slices/fund';
import { MainStackParamList } from '@app/routes/main-navigator';
import DateRange, { DateRangeOptions } from '@components/date-range';
import FundDetailInfo from '@components/fund-detail-info';
import FundHighlightsPreview from '@components/fund-highlights-preview';
import FundPortfolio from '@components/fund-portfolio';
import Text from '@components/text';

import styles from './fund-details.style';

type FundDetailsProps = NativeStackScreenProps<
  MainStackParamList,
  'FundDetails'
>;

export type FundDetailsNavigationProps = NativeStackNavigationProp<
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

  const [range, setRange] = useState<DateRangeOptions>('d');
  const [priceChangeData, setPriceChangeData] = useState<number[]>([]);

  useEffect(() => {
    dispatch(fetchFundDetails(fundId)).catch((_) => {});
  }, [dispatch, fundId]);

  useEffect(() => {
    if (!detail) {
      return;
    }
    switch (range) {
      case 'h':
        setPriceChangeData(
          detail.priceChange.slice(detail.priceChange.length - 5)
        );
        break;
      case 'd':
        setPriceChangeData(
          detail.priceChange.slice(detail.priceChange.length - 14)
        );
        break;
      case 'w':
        setPriceChangeData(
          detail.priceChange.slice(detail.priceChange.length - 20)
        );
        break;
      case 'm':
        setPriceChangeData(
          detail.priceChange.slice(detail.priceChange.length - 28)
        );
        break;
      case 'y':
        setPriceChangeData(
          detail.priceChange.slice(detail.priceChange.length - 35)
        );
        break;
      case 'all':
        setPriceChangeData(detail.priceChange);
    }
  }, [detail, range]);

  if (!detail) {
    return (
      <ActivityIndicator
        style={styles.loading}
        size={24}
        color={colors.primary}
      />
    );
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
        data={priceChangeData}
        svg={{
          stroke: colors.texts[priceColorType],
          strokeWidth: 2,
        }}
      />
      <DateRange
        style={styles.dateRange}
        range={range}
        onChangeRange={setRange}
      />
      <FundDetailInfo detail={detail} />
      <FundHighlightsPreview
        style={styles.dateRange}
        highlights={detail.highlights}
      />
      <FundPortfolio detail={detail} />
    </ScrollView>
  );
};

export default FundDetails;
