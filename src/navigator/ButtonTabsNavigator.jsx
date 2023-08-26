import React, { useContext, useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Saved from '../screens/Saved';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/Feather';
import { FavoritesContext } from '../context/favoriteContext/FavoritesContext';
import Setting from '../screens/Setting';
import Cart from '../screens/Cart';
import HomeDetailStackNavigator from './HomeDetailStackNavigator';

const ButtonTabsNavigator = () => {
  const {changeScreen, state}  = useContext(FavoritesContext)  

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          borderTopColor: '#fff',
        },
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen
        name="HomeDetailtStackNavigator"
        component={HomeDetailStackNavigator}
        listeners={{
          tabPress: e => {
            changeScreen('home')
          },
        }}
        options={{
          tabBarLabel:"Home",
          tabBarItemStyle: {borderRadius: 25, margin:2, padding:6, backgroundColor: state.currentScreen === 'home'? '#000' : "#fff"},
          tabBarIcon: () => <Icon name="home" size={24} color= {state.currentScreen === 'home' ? '#fff' : '#000'}  />,
          tabBarActiveTintColor: '#e9e9e9',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: state.currentScreen === 'home' ? '#fff' : '#000'},
        }}state
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        listeners={{
          tabPress: e => {
            changeScreen('saved')
          },
        }}
        options={{
          tabBarItemStyle: {borderRadius: 25, margin:2, padding:6, backgroundColor: state.currentScreen === 'saved'? '#000' : "#fff"},

          tabBarIcon: () => <Icon name="heart" size={24} color= {state.currentScreen === 'saved' ? '#fff' : '#000'}  />,
          tabBarActiveTintColor: '#e9e9e9',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: state.currentScreen === 'saved' ? '#fff' : '#000'},
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        listeners={{
          tabPress: e => {
            changeScreen('cart')
          },
        }}
        options={{
          tabBarItemStyle: {borderRadius: 25, margin:2, padding:6, backgroundColor: state.currentScreen === 'cart'? '#000' : "#fff"},
          tabBarIcon: () => <Icon name="shopping-bag" size={24} color= {state.currentScreen === 'cart' ? '#fff' : '#000'}  />,
          tabBarActiveTintColor: '#e9e9e9',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: state.currentScreen === 'cart' ? '#fff' : '#000'},
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        listeners={{
          tabPress: e => {
            changeScreen('setting')
          },
        }}
        options={{
          tabBarItemStyle: {borderRadius: 25, margin:2, padding:6, backgroundColor: state.currentScreen === 'setting'? '#000' : "#fff"},
          tabBarIcon: () => <Icon name="settings" size={24} color= {state.currentScreen === 'setting' ? '#fff' : '#000'}  />,
          tabBarActiveTintColor: '#e9e9e9',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: state.currentScreen === 'setting' ? '#fff' : '#000'},
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtonTabsNavigator;
