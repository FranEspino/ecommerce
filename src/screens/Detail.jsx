import React, {useContext, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import {CartContext} from '../context/cartContext/CartContext';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detail = stack => {
  const {title, price, rating, description, image} = stack.route.params;
  const { addToCart, state} = useContext(CartContext);

  useEffect(()=>{
    const cartString = JSON.stringify(state.cart)
    saveCartStoreData(cartString)
  },[state.cart])

  const saveCartStoreData = async arrayCart => {
    try {
      await AsyncStorage.setItem('as-cart', arrayCart);
    } catch (e) {}
  };

  return (
    <View style={{flex: 1}}>
      <View style={{height: '85%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              stack.navigation.navigate('Home');
            }}>
            <Icon name="arrow-back" size={32} color="#000" />
          </TouchableOpacity>
          <Text style={{fontSize: 26, fontWeight: 'bold', color: '#000'}}>
            Details
          </Text>
          <Icon name="notifications-outline" size={32} color="#000" />
        </View>
        <View
          style={{
            width: '90%',
            height: '40%',
            borderRadius: 10,
            margin: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: image,
            }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 10,
              right: 0,
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 10.32,
              elevation: 16,
            }}>
            <Icon2 name="heart" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{fontSize: 28, margin: 16, fontWeight: 'bold'}}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 16,
            fontWeight: 'normal',
          }}>{`⭐${rating.rate}/5 ${rating.count} reviews`}</Text>
        <Text
          numberOfLines={6}
          ellipsizeMode="tail"
          style={{
            fontSize: 18,
            marginHorizontal: 16,
            marginTop: 20,
            fontWeight: 'normal',
            color: '#666666',
          }}>
          {description}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '15%',
          width: '100%',
          borderTopWidth: 1,
          bottom: 0,
          borderTopColor: '#CCCCCC',
          position: 'absolute',
          paddingHorizontal: 28,
        }}>
        <View>
          <Text style={{fontSize: 18}}>Price</Text>
          <Text
            style={{fontSize: 28, fontWeight: 'bold'}}>{`S/ ${price}`}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            const existProductInCart = state.cart.find(products =>
              stack.route.params.id === products.id
              
            )
            if(existProductInCart){
              Snackbar.show({
                backgroundColor: '#BDBDBD',
                textColor: '#000',
                text: 'El producto ya se encuentra en el carrito.',
                duration: Snackbar.LENGTH_LONG,
              });
              
            }else{
              Snackbar.show({
                backgroundColor: '#2E7D32',
                textColor: '#fff',
                text: 'El producto se agrego al carrito.',
                duration: Snackbar.LENGTH_LONG,
              });

              
              addToCart(stack.route.params);
            }
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            borderRadius: 10,
            paddingHorizontal: 24,
            paddingVertical: 8,
          }}>
          <Icon2 name="shopping-bag" size={32} color="#fff" />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '800',
              marginLeft: 8,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
