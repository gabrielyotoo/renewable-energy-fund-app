import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@screens/home/home';
import Login from '@screens/login/login';
import Register from '@screens/register/register';

export type MainStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default MainNavigator;
