import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { TouchableNativeFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './header.style';

const Header = ({ navigation }: NativeStackHeaderProps) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView edges={['top']}>
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

      <View
        style={{ ...styles.separator, backgroundColor: colors.textInput }}
      />
    </SafeAreaView>
  );
};

export default Header;
