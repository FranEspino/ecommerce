import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Saved from '../screens/Saved';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/Feather';

const ButtonTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          borderTopColor: '#CCCCCC',
          borderWidth: 1,
          elevation: 20
        },
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} color="#000" />,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: '#000'},
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: () => <Icon name="heart" size={24} color="#000" />,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: '#000'},
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Saved}
        options={{
          tabBarIcon: () => <Icon name="shopping-bag" size={24} color="#000" />,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: '#000'},
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Saved}
        options={{
          tabBarIcon: () => <Icon name="settings" size={24} color="#000" />,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: '#000'},
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtonTabsNavigator;
