import React, { useContext, useEffect } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { CartContext } from '../context/cartContext/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartItem = ({image, price, title,product}) => {
  const {removeToCart,state} = useContext(CartContext)

  useEffect(()=>{
    console.log(state.cart)
    const cartString = JSON.stringify(state.cart)
    saveCartStoreData(cartString)
  },[state.cart])

  const saveCartStoreData = async arrayCart => {
    try {
      await AsyncStorage.setItem('as-cart', arrayCart);
    } catch (e) {}
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginTop: 18,
        height: 100,
        paddingHorizontal: 8,
        borderBottomWidth: 0.5,
        paddingBottom: 12,
        borderColor:"#C2C2C2"
      }}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: '20%',
          height: 100,
          resizeMode: 'contain',
        }}
      />

      <View
        style={{
          justifyContent: 'space-between',
          height: '100%',
          width: '50%',
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            maxWidth: 200,
            color: '#000',
            fontWeight: '600',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: '#000',
            fontWeight: 'bold',
          }}>
          {`S/${price}`}
        </Text>
      </View>

      <View
        style={{width: '25%', justifyContent: 'space-between', height: '100%'}}>
        <View style={{alignSelf: 'flex-end'}}>
          <TouchableOpacity
           onPress={()=>{
            removeToCart(product)
           }}
          >
            <Icon2 name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#C2C2C2',
              padding: 2,
            }}>
            <Icon name="plus" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginHorizontal: 16}}>1</Text>
          <TouchableOpacity
            style={{
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#C2C2C2',
              padding: 2,
            }}>
            <Icon name="minus" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
