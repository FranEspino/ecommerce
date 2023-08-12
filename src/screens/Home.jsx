import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct'
import axios from 'axios'
const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      setProducts(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <View style={{flex:1}}>
     <FlatList
       style={{padding:10}}
       //gap 
    
        data={products}
        renderItem={({item})=>{
          return <CardProduct title={item.title} image={item.image} price={item.price} />
        }
        }
        keyExtractor={(item)=>item.id}
        numColumns={2}
      />
    </View>
  )
}

export default Home