import { useTheme } from '@react-navigation/native';
import { View, ViewStyle } from 'react-native';

import Text from '@components/text';

import styles from './banner.style';

type BannerProps = {
  title: string;
  subtitle: string;
  image: React.ReactNode;
  style?: ViewStyle;
};

const Banner = ({ image, title, subtitle, style }: BannerProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={{ ...styles.banner, backgroundColor: colors.primary, ...style }}
    >
      <View style={styles.texts}>
        <Text
          bold
          size="h4"
          style={{ ...styles.text, color: colors.textOnPrimary }}
        >
          {title}
        </Text>
        <Text style={{ ...styles.text, color: colors.textOnPrimary }}>
          {subtitle}
        </Text>
      </View>
      {image}
    </View>
  );
};

export default Banner;
