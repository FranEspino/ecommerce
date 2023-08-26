import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import NativeStackNavigator from './src/navigator/NativeStackNavigator';
import { FavoritesProvider } from './src/context/favoriteContext/FavoritesProvider';
import { CartProvider } from './src/context/cartContext/CartProvider';

const App = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <SafeAreaView style={{flex:1}} >
            <NativeStackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </FavoritesProvider>
    </CartProvider>
  )
}

export default App