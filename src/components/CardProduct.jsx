import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';

import {FavoritesContext} from '../context/favoriteContext/FavoritesContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

const CardProduct = ({title, image, price, rate, object, stack}) => {
  const {state, addFavorites} = useContext(FavoritesContext);
  const [iconsaved, setIconSaved] = useState(false);
  useEffect(() => {
    if (state.favorites.find(products => object.id === products.id)) {
      setIconSaved(true);
    }
  }, [state.favorites]);

  useEffect(() => {
    const arrayFavoritesString = JSON.stringify(state.favorites);
    saveStoreData(arrayFavoritesString);
  }, [state]);

  const addToFavorite = objectProduct => {
    if (state.favorites.find(products => objectProduct.id === products.id)) {
    } else {
      addFavorites(objectProduct);
    }
  };

  const saveStoreData = async arrayFavorites => {
    try {
      await AsyncStorage.setItem('as-favorites', arrayFavorites);
    } catch (e) {}
  };

  return (
    <View
      style={{
        width: '45%',
        height: 220,
        borderRadius: 10,
        backgroundColor: '#fff',
        margin: 8,
      }}>
        <TouchableOpacity onPress={()=>{
          stack.navigation.navigate('Detail',object)
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
        onPress={() => {
          addToFavorite(object);
          setIconSaved(true)
          Snackbar.show({
            text:
            iconsaved 
                ? 'El producto ya esta en favoritos'
                : 'El producto se agrego correctamente',
            duration: Snackbar.LENGTH_LONG,
          });
        }}
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
        {iconsaved ? (
          <Icon2 name="heart" size={24} color="#000" />
        ) : (
          <Icon name="heart" size={24} color="#000" />
        )}
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
      </TouchableOpacity>
    </View>
  );
};

export default CardProduct;
