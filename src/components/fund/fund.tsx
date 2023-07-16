/* eslint-disable security/detect-object-injection */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import * as shape from 'd3-shape';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

import { FundPreview } from '@app/models/fund';
import Text from '@components/text';

import styles from './fund.style';

type FundProps = Omit<FundPreview, 'id'>;

const Fund = ({
  priceChange,
  type,
  name,
  amount,
  priceChangePercentage,
  priceDifferent,
}: FundProps) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const priceColorType = priceDifferent === 'down' ? 'error' : 'success';

  const renderFundIcon = useCallback(() => {
    switch (type) {
      case 'biomass':
        return (
          <MaterialCommunityIcons name="corn" size={16} color="yellowgreen" />
        );
      case 'geothermal':
        return (
          <MaterialCommunityIcons name="smoke" size={16} color="lightcoral" />
        );
      case 'hydroelectric':
        return (
          <MaterialCommunityIcons
            name="hydro-power"
            size={16}
            color="lightseagreen"
          />
        );
      case 'sun':
        return <Feather name="sun" size={16} color="gold" />;
      case 'wind':
        return <Feather name="wind" size={16} color="cadetblue" />;
    }
  }, [type]);

  return (
    <View style={[styles.container, { borderColor: colors.textInput }]}>
      {renderFundIcon()}
      <Text bold numberOfLines={1}>
        {name}
      </Text>
      <LineChart
        style={styles.chart}
        data={priceChange}
        curve={shape.curveBasis}
        svg={{
          stroke: colors.texts[priceColorType],
          strokeWidth: 2,
        }}
      />
      <View style={styles.texts}>
        <Text>{t('formatter.currency', { value: amount })}</Text>
        <MaterialCommunityIcons
          name={`trending-${priceDifferent}`}
          size={12}
          color={colors.texts[priceColorType]}
          style={styles.trendIcon}
        />
        <Text type={priceColorType}>
          {t('formatter.percentage', { value: priceChangePercentage })}
        </Text>
      </View>
    </View>
  );
};

export default Fund;
