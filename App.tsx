import { NavigationContainer } from '@react-navigation/native';
import { FontSource, useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '@app/i18n/config';
import { mainTheme } from '@app/theme';

import MontserratBold from './assets/fonts/montserrat/Montserrat-Bold.ttf';
import MontserratMedium from './assets/fonts/montserrat/Montserrat-Medium.ttf';
import MainNavigator from './src/main-navigator';

SplashScreen.preventAutoHideAsync().catch((_) => {});

const App = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': MontserratBold as FontSource,
    'Montserrat-Medium': MontserratMedium as FontSource,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer theme={mainTheme}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
