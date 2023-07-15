import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './header.style';

const Header = ({ navigation }: NativeStackHeaderProps) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        {navigation.canGoBack() ? (
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        ) : null}
      </View>
      <View
        style={{ ...styles.separator, backgroundColor: colors.textInput }}
      />
    </SafeAreaView>
  );
};

export default Header;
