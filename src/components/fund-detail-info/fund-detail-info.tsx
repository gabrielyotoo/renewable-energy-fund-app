import { DateTime } from 'luxon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { FundDetails } from '@app/models/fund';
import Text from '@components/text';

import styles from './fund-detail-info.style';

type FundDetailInfoProps = {
  detail: FundDetails;
};

const FundDetailInfo = ({
  detail: { aum, ter, vintage, issueDate, priceAtClose, priceAtOpen },
}: FundDetailInfoProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Text size="h3" bold style={styles.infoTitle}>
        {t('screens.fundDetails.info')}
      </Text>
      <View style={styles.columns}>
        <View>
          <View style={styles.data}>
            <Text type="ghost">{t('screens.fundDetails.AUM')}</Text>
            <Text>{t('formatter.currency', { value: aum })}</Text>
          </View>
          <View style={styles.data}>
            <Text type="ghost">{t('screens.fundDetails.TER')}</Text>
            <Text>{t('formatter.percentage', { value: ter })}</Text>
          </View>
          <View style={styles.data}>
            <Text type="ghost">{t('screens.fundDetails.vintageRange')}</Text>
            <Text>
              {DateTime.fromISO(vintage).year}-{DateTime.now().year}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.data}>
            <Text type="ghost">{t('screens.fundDetails.issueDate')}</Text>
            <Text>{issueDate}</Text>
          </View>
          <View style={styles.data}>
            <Text type="ghost">{t('screens.fundDetails.priceAtClose')}</Text>
            <Text>{t('formatter.currency', { value: priceAtClose })}</Text>
          </View>
          <View style={styles.data}>
            <Text type="ghost">{t('screens.fundDetails.priceAtOpen')}</Text>
            <Text>{t('formatter.currency', { value: priceAtOpen })}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default FundDetailInfo;
