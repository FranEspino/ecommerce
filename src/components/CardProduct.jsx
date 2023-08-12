import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const CardProduct = ({title, image, price, rate}) => {
  return (
    <View
      style={{
        width: '45%',
        height: 220,
        borderRadius: 10,
        backgroundColor: '#fff',
        margin: 8,
      }}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 160,
          height: 160,
          resizeMode: 'contain',
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
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
        <Icon name="heart" size={24} color="#000" />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          color: 'black',
          fontSize: 16,
          textAlign: 'center',
          fontFamily: 'Poppins-Bold',
        }}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
            marginLeft: 5,
          }}>
           {`S/ ${price}`}
        </Text>

        <Text
          style={{
            fontFamily: 'Poppins-Black',
            color: '#000',
            fontSize: 16,
          }}>
          {`⭐ ${rate}`}
        </Text>
      </View>
    </View>
  );
};

export default CardProduct;
