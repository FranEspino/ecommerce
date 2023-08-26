import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardProduct from '../components/CardProduct';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';

const Home = (stack) => {
  const [productsoriginal, setProductsOriginal] = useState([]);
  const [isfilterEmpty, setIsFilterEmpty] = useState(false);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  const searchProduct = (arrayProducts, text) => {
    if (text == '') return fetchProducts();
    var arrayBySearch = [...arrayProducts];
    arrayBySearch = arrayBySearch.filter(item => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    if (arrayBySearch.length == 0) return setProducts(arrayProducts);
    setProducts(arrayBySearch);
  };

  const filterProducts = (arrayProducts, type) => {
    setIsFilterEmpty(true);
    switch (type) {
      case 'price': {
        var arrayByPrice = [...arrayProducts];
        arrayByPrice.sort((a, b) => a.price - b.price);
        setProducts(arrayByPrice);
        break;
      }
      case 'men': {
        var arrayByMen = [...arrayProducts];
        var filterbymen = arrayByMen.filter(products => {
          return products.category === "men's clothing";
        });
        setProducts(filterbymen);
        break;
      }
      case 'woman': {
        var arrayByWoman = [...arrayProducts];
        var filterbywoman = arrayByWoman.filter(products => {
          return products.category === "women's clothing";
        });
        setProducts(filterbywoman);

        break;
      }
      case 'electronics': {
        var arrayByElectronics = [...arrayProducts];
        var filterbyelectronics = arrayByElectronics.filter(products => {
          return products.category === 'electronics';
        });
        setProducts(filterbyelectronics);

        break;
      }

      default: {
        fetchProducts();
        setIsFilterEmpty(false);

        break;
      }
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setProductsOriginal(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
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
            onChangeText={text => {
              searchProduct(products, text);
            }}
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
          onPress={() => filterProducts(productsoriginal, 'price')}
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

      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16}}>
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
            filterProducts(productsoriginal, 'men');
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
          onPress={() => {
            setFilter('woman');
            filterProducts(productsoriginal, 'woman');
          }}
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
          onPress={() => {
            filterProducts(productsoriginal, 'electronics');

            setFilter('electronics');
          }}
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
      {products.length > 0 ? (
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
                object={item}
                stack={stack}
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
            height: '70%',
          }}>
          {isfilterEmpty ? (
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 18, color: '#000'}}>
              No se encontro resultados
            </Text>
          ) : (
            <Image
              width={60}
              height={60}
              source={{uri: 'https://i.gifer.com/ZZ5H.gif'}}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default Home;
