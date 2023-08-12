import {View, FlatList, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardProduct from '../components/CardProduct';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  const searchProduct = (arrayProducts, text) => {
    if(text == '') return fetchProducts();
    var arrayBySearch = [...arrayProducts];
    arrayBySearch = arrayBySearch.filter(item => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    if(arrayBySearch.length == 0) return setProducts(arrayProducts);
    setProducts(arrayBySearch);

  }

  const filterProducts = (arrayProducts, type) => {
    switch (type) {
      case 'price': {
        var arrayByPrice = [...arrayProducts];
        arrayByPrice.sort((a, b) => a.price - b.price);
        setProducts(arrayByPrice);
        break;
      }
      case 'men': {
        //TODO: category: men's clothing
        break;
      }
      case 'woman': {
        //TODO: category: women's clothing
        break;
      }
      case 'electronics': {
        //TODO: category: electronics
        break;
      }
  
      default: {
        fetchProducts()
        break;
      }
    }
  };

  const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{fontSize: 26, fontFamily: 'Poppins-Bold', color: '#000'}}>
          Discover
        </Text>
        <Icon name="notifications-outline" size={32} color="#000" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: '#F2F2F2',
            margin: 8,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon2 name="search" size={28} color="#000" />
          <TextInput
            placeholder="Search anything"
            placeholderTextColor={'#666666'}
            cursorColor="black"
            onChangeText={(text)=>{searchProduct(products, text)}}
            selectionColor="black"
            keyboardType="default"
            style={{
              backgroundColor: '#F2F2F2',
              height: 53,
              width: '80%',
              paddingLeft: 10,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => filterProducts(products, 'price')}
          style={{
            backgroundColor: '#000',
            width: '12%',
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="filter" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => {
            filterProducts(products);
            setFilter('all');

          }}
          style={{
            backgroundColor: filter === 'all' ? '#000' : '#e9e9e9',
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}>
          <Text
            style={{
              color: filter === 'all' ? '#e9e9e9' : '#000',
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFilter('men');
            filterProducts(products, 'men');
          }}
          style={{
            backgroundColor: filter === 'men' ? '#000' : '#e9e9e9',
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}>
          <Text
            style={{
              color: filter === 'men' ? '#e9e9e9' : '#000',
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
            }}>
            Men
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter('woman')}
          style={{
            backgroundColor: filter === 'woman' ? '#000' : '#e9e9e9',
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}>
          <Text
            style={{
              color: filter === 'woman' ? '#e9e9e9' : '#000',
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
            }}>
            Woman
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter('electronics')}
          style={{
            backgroundColor: filter === 'electronics' ? '#000' : '#e9e9e9',
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}>
          <Text
            style={{
              color: filter === 'electronics' ? '#e9e9e9' : '#000',
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
            }}>
            Electronics
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{padding: 10}}
        data={products}
        renderItem={({item}) => {
          return (
            <CardProduct
              title={item.title}
              image={item.image}
              price={item.price}
              rate={item.rating.rate}
            />
          );
        }}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Home;
