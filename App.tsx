import { NavigationContainer } from '@react-navigation/native';
import { FontSource, useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '@app/i18n/config';
import MainNavigator from '@app/routes/main-navigator';
import { mainTheme } from '@app/theme';

import MontserratBold from '@assets/fonts/montserrat/Montserrat-Bold.ttf';
import MontserratMedium from '@assets/fonts/montserrat/Montserrat-Medium.ttf';

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
      <StatusBar backgroundColor="transparent" translucent />
      <NavigationContainer theme={mainTheme}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
