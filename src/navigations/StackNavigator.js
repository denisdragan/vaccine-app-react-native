import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//----------------- Auth Screen --------------------
import Splash from '../views/splash/Splash'
import Signin from '../views/signin/Signin'
import Signup from '../views/signup/Signup'
import Onboarding from '../views/onboarding/Onboarding';
import PrivacyPolicy from '../views/privacypolicy/PrivacyPolicy';
import Profile from '../views/profile/Profile';

/////// ------------- Bottom NAvigator ----------//
import BottomNavigator from '../navigations/BottomNavigator'

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}