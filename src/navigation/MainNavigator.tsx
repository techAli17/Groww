import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import HomeScreen from '../screens/dashBoard/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';

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
    </Stack.Navigator>
  );
};

export default MainNavigator;
