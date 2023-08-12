import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import SignUp from '../screens/SignUp';
import ButtonTabsNavigator from './ButtonTabsNavigator';
const Stack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'white'},
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ButtonTabsNavigator" component={ButtonTabsNavigator} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigator;
