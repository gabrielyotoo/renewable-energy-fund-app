import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { useAppSelector } from '@app/hooks/useAppSelector';
import Header from '@components/header';
import HomeHeader from '@components/home-header';
import Text from '@components/text';
import FundDetails from '@screens/fund-details';
import Login from '@screens/login';
import Register from '@screens/register';

import HomeNavigator, { HomeTabBarParamList } from './home-tabbar';

export type MainStackParamList = {
  Login: undefined;
  Register: undefined;
  HomeTabBar: NavigatorScreenParams<HomeTabBarParamList>;
  FundDetails: { fundId: string };
};

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  const { detail } = useAppSelector((state) => state.fund);

  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen
        component={HomeNavigator}
        name="HomeTabBar"
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        component={FundDetails}
        name="FundDetails"
        options={{
          header: (props) => (
            <Header {...props}>
              <View style={{ alignItems: 'center' }}>
                <Text bold>{detail?.name}</Text>
                <Text type="ghost">{detail?.code}</Text>
              </View>
            </Header>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
