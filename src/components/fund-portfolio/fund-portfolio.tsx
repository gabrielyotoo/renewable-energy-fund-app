import { Foundation } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { DateTime } from 'luxon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { FundDetails } from '@app/models/fund';
import Button from '@components/button';
import Text from '@components/text';
import { FundDetailsNavigationProps } from '@screens/fund-details/fund-details';

import styles from './fund-portfolio.style';

type FundPortfolioProps = {
  detail: FundDetails;
};

const FundPortfolio = ({ detail: { userPortfolio } }: FundPortfolioProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation<FundDetailsNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Foundation
          name="graph-pie"
          size={22}
          color={colors.text}
          style={styles.titleIcon}
        />
        <Text size="h3" bold>
          {t('screens.fundDetails.portfolio.title')}
        </Text>
      </View>
      <View style={styles.header}>
        <View>
          <Text bold size="h2">
            {t('screens.fundDetails.portfolio.credits', {
              count: userPortfolio.credits,
            })}
          </Text>
          <Text
            size="h4"
            type={userPortfolio.creditsAppreciation > 0 ? 'success' : 'error'}
          >
            {t('formatter.percentage', {
              value: userPortfolio.creditsAppreciation,
            })}
          </Text>
        </View>
        <View style={styles.endContainer}>
          <Text bold size="h2">
            {t('formatter.currency', { value: userPortfolio.creditsValue })}
          </Text>
          <Text size="h4" type="ghost">
            {t('screens.fundDetails.portfolio.lastPurchase', {
              count: Number(
                DateTime.fromISO(userPortfolio.lastPurchase)
                  .diffNow('days')
                  .negate()
                  .days.toFixed(0)
              ),
            })}
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          style={[
            styles.smallButton,
            styles.sellButton,
            { borderColor: colors.textInput },
          ]}
          textStyle={{ color: colors.text }}
          title={t('screens.fundDetails.portfolio.sell')}
        />
        <Button
          style={styles.smallButton}
          title={t('screens.fundDetails.portfolio.retireCredits')}
        />
      </View>
      <Text>
        {t('screens.fundDetails.portfolio.previous', {
          count: userPortfolio.previousRetire,
        })}
      </Text>
      <View style={[styles.disclaimer, { backgroundColor: colors.textInput }]}>
        <Text style={{ color: colors.ghostedText }}>
          {t('screens.fundDetails.portfolio.disclaimer')}
        </Text>
      </View>
      <Button
        style={styles.button}
        title={t('screens.fundDetails.portfolio.buy')}
        onPress={() => navigation.navigate('HomeTabBar', { screen: 'Home' })}
      />
    </View>
  );
};

export default FundPortfolio;
