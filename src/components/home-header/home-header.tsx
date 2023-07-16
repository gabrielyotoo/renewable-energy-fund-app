import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { hexToRGB } from '@app/utils/colors';
import Text from '@components/text';

import styles from './home-header.style';

const HomeHeader = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.header}>
        <View style={{ ...styles.profile, backgroundColor: colors.textInput }}>
          <AntDesign name="user" size={24} color={colors.text} />
        </View>
        <Text size="h4" bold style={styles.account}>
          {t('components.homeHeader.account', { value: 200 })}
        </Text>
        <MaterialCommunityIcons
          name="bell-outline"
          size={24}
          color={colors.text}
        />
      </View>
      <View style={styles.headerBottom}>
        <View>
          <Text>{t('components.homeHeader.portfolio')}</Text>
          <View style={styles.portfolio}>
            <Text bold size="h1">
              {t('formatter.currency', { value: 2000 })}
            </Text>
            <MaterialCommunityIcons
              name="trending-up"
              size={16}
              color={colors.texts.success}
              style={styles.trendingIcon}
            />
            <Text type="success" size="h4">
              {t('formatter.percentage', { value: 3.4 })}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.earnRewards,
            {
              backgroundColor: hexToRGB(colors.primary, 0.1),
            },
          ]}
        >
          <FontAwesome5 name="coins" size={12} color={colors.primary} />
          <Text bold type="accent" style={styles.earnRewardsText} size="h6">
            {t('components.homeHeader.earn')}
          </Text>
        </View>
      </View>
      <View
        style={{ ...styles.separator, backgroundColor: colors.textInput }}
      />
    </SafeAreaView>
  );
};

export default HomeHeader;
