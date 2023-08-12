import React from 'react'
import { SafeAreaView } from 'react-native'
import ButtonTabsNavigator from './src/navigator/ButtonTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import NativeStackNavigator from './src/navigator/NativeStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}} >
        <NativeStackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App