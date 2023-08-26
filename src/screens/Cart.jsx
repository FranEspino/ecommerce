import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';

import {CartContext} from '../context/cartContext/CartContext';
import CartItem from '../components/CartItem';

const Cart = tabs => {
  const {state} = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);

  useEffect(()=>{
   const subtotal = state.cart.reduce((subtotal,product)=>subtotal+product.price, 0).toFixed(2)
    setSubtotal(subtotal)
  },[state.cart])

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            tabs.navigation.goBack();
          }}>
          <Icon name="arrow-back" size={32} color="#000" />
        </TouchableOpacity>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#000'}}>
          Cart
        </Text>
        <Icon name="notifications-outline" size={32} color="#000" />
      </View>
      <View style={{height: '60%'}}>
          {
            state.cart.length >0 ?
            <FlatList
            persistentScrollbar={true}
            style={{padding: 10}}
            data={state.cart}
            renderItem={({item}) => {
              return (
                <CartItem
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  product={item}
                />
              );
            }}
            numColumns={1}
            keyExtractor={item => item.id}
          />
          :
          <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <Image
            width={200}
            height={200}
            source={{
              uri: 'https://res.cloudinary.com/dokwcwo9t/image/upload/v1692466938/idat/empty_khompy.png',
            }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              color: '#000',
              marginTop: 16,
            }}>
            Tu carrito esta vacio
          </Text>
        </View>
          }
      </View>

      <View style={{padding: 16}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, color: '#666666'}}>Sub-Total</Text>
          <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
            {
              subtotal
            }
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, color: '#666666'}}>Off</Text>
          <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
            {
              (subtotal * 0.020).toFixed(2)
            }
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            width: '100%',
            paddingTop:8,
            justifyContent: 'space-between',
            borderTopColor: '#666666',
            borderTopWidth:1
          }}>
          <Text style={{fontSize: 24, color: '#666666'}}>Total</Text>
          <Text style={{fontSize: 24, color: '#000', fontWeight: 'bold'}}>
            S/ 23
          </Text>
        </View>
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
      

        <TouchableOpacity
          onPress={() => {
        
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            borderRadius: 10,
            width: '100%',
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '800',
              marginRight: 8,
            }}>
           Checkout
          </Text>
          <Icon2 name="arrow-right" size={32} color="#fff" />

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
