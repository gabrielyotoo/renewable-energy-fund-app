import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View, Image } from 'react-native';

import { FundHighlight } from '@app/models/fund';
import Text from '@components/text';

import styles from './fund-highlights-preview.style';

type FundHighlightsPreviewProps = {
  highlights?: FundHighlight[];
};

const FundHighlightsPreview = ({ highlights }: FundHighlightsPreviewProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <FlatList
      horizontal
      data={highlights}
      style={{ ...styles.container, borderColor: colors.textOnPrimary }}
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View>
            <Image source={{ uri: item.iconUrl }} />
            <Text></Text>
          </View>
          <Text></Text>
          <Text></Text>
        </View>
      )}
    />
  );
};

export default FundHighlightsPreview;
