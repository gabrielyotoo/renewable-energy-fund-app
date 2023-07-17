import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { hexToRGB } from '@app/utils/colors';
import Text from '@components/text';

import styles from './home-header.style';

const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const headerMarginTop = useSharedValue(-90);

  const animatedStyle = useAnimatedStyle(() => ({
    marginTop: headerMarginTop.value,
  }));

  const toggleHeader = useCallback(() => {
    if (headerMarginTop.value < 0) {
      headerMarginTop.value = withSpring(0);
    } else {
      headerMarginTop.value = withSpring(-90);
    }
  }, [headerMarginTop]);

  useEffect(() => {
    setTimeout(toggleHeader, 1000);
  }, [headerMarginTop, toggleHeader]);

  return (
    <>
      <StatusBar backgroundColor={colors.background} />
      <TouchableWithoutFeedback onPress={toggleHeader}>
        <View
          style={[
            styles.header,
            { backgroundColor: colors.background, paddingTop: insets.top },
          ]}
        >
          <View
            style={{ ...styles.profile, backgroundColor: colors.textInput }}
          >
            <AntDesign name="user" size={24} color={colors.text} />
          </View>
          <View style={styles.account}>
            <Text size="h4" bold>
              {t('components.homeHeader.account', { value: 200 })}
            </Text>
            <FontAwesome5 name="chevron-down" size={12} color="black" />
          </View>
          <MaterialCommunityIcons
            name="bell-outline"
            size={24}
            color={colors.text}
          />
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.headerBottom, animatedStyle]}>
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
      </Animated.View>
      <View
        style={{ ...styles.separator, backgroundColor: colors.textInput }}
      />
    </>
  );
};

export default HomeHeader;
