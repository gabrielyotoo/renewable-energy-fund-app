import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { TouchableNativeFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './header.style';

type HeaderProps = NativeStackHeaderProps & {
  children?: React.ReactNode;
};

const Header = ({ navigation, children }: HeaderProps) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      edges={['top']}
      style={{ backgroundColor: colors.background }}
    >
      <View style={styles.header}>
        {children}
        {navigation.canGoBack() ? (
          <View style={styles.iconContainer}>
            <TouchableNativeFeedback onPress={navigation.goBack}>
              <Ionicons
                style={styles.icon}
                name="ios-arrow-back"
                size={28}
                color={colors.text}
              />
            </TouchableNativeFeedback>
          </View>
        ) : (
          <View style={styles.container} />
        )}
      </View>

      <View
        style={{ ...styles.separator, backgroundColor: colors.textInput }}
      />
    </SafeAreaView>
  );
};

export default Header;
