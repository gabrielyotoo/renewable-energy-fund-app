import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FundDetails } from '@app/models/fund';
import FundHighlightsPreview from '@components/fund-highlights-preview';
import Text from '@components/text';
import Placeholder from '@screens/placeholder';

import styles from './fund-breakdown.style';

type FundBreakdownProps = {
  detail: FundDetails;
};

const BreakdownTab = createMaterialTopTabNavigator();

const FundBreakdown = ({ detail: { highlights } }: FundBreakdownProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Text size="h3" bold style={styles.infoTitle}>
        {t('screens.fundDetails.fundBreakdown.title')}
      </Text>
      <BreakdownTab.Navigator>
        <BreakdownTab.Screen
          options={{
            title: t('screens.fundDetails.fundBreakdown.tabs.highlighted'),
            tabBarLabel: (props) => <Text>{props.children}</Text>,
          }}
          name="Highlight"
        >
          {(_) => <FundHighlightsPreview highlights={highlights} />}
        </BreakdownTab.Screen>
        <BreakdownTab.Screen
          options={{ title: t('screens.fundDetails.fundBreakdown.tabs.value') }}
          name="Value"
          component={Placeholder}
        />
        <BreakdownTab.Screen
          options={{
            title: t('screens.fundDetails.fundBreakdown.tabs.vintage'),
          }}
          name="Vintage"
          component={Placeholder}
        />
        <BreakdownTab.Screen
          options={{
            title: t('screens.fundDetails.fundBreakdown.tabs.registry'),
          }}
          name="Registry"
          component={Placeholder}
        />
      </BreakdownTab.Navigator>
    </>
  );
};

export default FundBreakdown;
