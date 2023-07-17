import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FlatList, View, Image, ViewStyle } from 'react-native';

import { FundHighlight } from '@app/models/fund';
import Text from '@components/text';

import styles from './fund-highlights-preview.style';

type FundHighlightsPreviewProps = {
  highlights?: FundHighlight[];
  style?: ViewStyle;
};

const FundHighlightsPreview = ({
  highlights,
  style,
}: FundHighlightsPreviewProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <FlatList
      horizontal
      data={highlights}
      contentContainerStyle={style}
      showsHorizontalScrollIndicator={false}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <View style={[styles.container, { borderColor: colors.textInput }]}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.texts}>
            <Image
              source={{ uri: item.iconUrl }}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.text} numberOfLines={4}>
              {item.text}
            </Text>
            <Text style={styles.readMore}>
              {t('components.fundsHighlightsPreview.readMore')}
            </Text>
          </View>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default FundHighlightsPreview;
