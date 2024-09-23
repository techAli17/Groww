import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/dashBoard/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SplashScreen from '../screens/deeplinks/SplashScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import EmailScreen from '../screens/auth/EmailScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
