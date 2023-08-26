import { useEffect, useReducer } from "react";
import { CartReducer } from "./CartReducer";
import { CartContext, initialState } from "./CartContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    useEffect(()=>{
        getData()
    },[])

    const getData =  async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('as-cart');
           const cartObject = jsonValue != null ? JSON.parse(jsonValue) : [];
           initialCart(cartObject)
          } catch (e) {
           console.log(e)
          }
    };

    const initialCart = (arrayCartObject) =>{
        dispatch({type:'INITIAL_CART', payload: arrayCartObject})
    }

    const addToCart = (product) => {
        dispatch({type: 'ADD_TO_CART', payload: product})
    }

    const removeToCart = (product) =>{
        dispatch({type: 'REMOVE_TO_CART', payload: product})

    }

    return (
        <CartContext.Provider
         value={{state,addToCart,removeToCart}}>
            {children}
        </CartContext.Provider>
    )
}