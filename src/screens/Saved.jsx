import {View, FlatList, Image, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {FavoritesContext} from '../context/FavoritesContext';
import CardProduct from '../components/CardProduct';
import CardFavorites from '../components/CardFavorite';

const Saved = () => {
  const {state} = useContext(FavoritesContext);



  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {state.favorites.length > 0 ? (
        <FlatList
          style={{padding: 10}}
          data={state.favorites}
          renderItem={({item}) => {
            return (
              <CardFavorites
                title={item.title}
                image={item.image}
                price={item.price}
                rate={item.rating.rate}
                object={item}

              />
            );
          }}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      ) : (
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
            Aun no tienes productos favoritos
          </Text>
        </View>
      )}
    </View>
  );
};

export default Saved;
