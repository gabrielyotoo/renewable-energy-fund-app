import { Entypo, Octicons, Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Home from '@screens/home';
import Placeholder from '@screens/placeholder';

export type HomeTabBarParamList = {
  Home: undefined;
  Trade: undefined;
  Portfolio: undefined;
};

const TabBar = createBottomTabNavigator<HomeTabBarParamList>();

const HomeNavigator = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <TabBar.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        headerShown: false,
      }}
    >
      <TabBar.Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: (props) => (
            <Entypo name="home" size={24} color={props.color} />
          ),
          tabBarLabel: t('components.tabBar.home'),
        }}
      />
      <TabBar.Screen
        component={Placeholder}
        name="Trade"
        options={{
          tabBarIcon: (props) => (
            <Octicons name="arrow-switch" size={24} color={props.color} />
          ),
          tabBarLabel: t('components.tabBar.trade'),
        }}
      />
      <TabBar.Screen
        component={Placeholder}
        name="Portfolio"
        options={{
          tabBarIcon: (props) => (
            <Foundation name="graph-pie" size={24} color={props.color} />
          ),
          tabBarLabel: t('components.tabBar.portfolio'),
        }}
      />
    </TabBar.Navigator>
  );
};

export default HomeNavigator;
