import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@screens/home';
import Login from '@screens/login';
import Register from '@screens/register';

import Header from './components/header';

export type MainStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default MainNavigator;
