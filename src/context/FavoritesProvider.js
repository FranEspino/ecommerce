import { useEffect, useReducer } from "react";
import { FavoritesReducer } from "./FavoritesReducer";
import { FavoritesContext, initialState } from "./FavoritesContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesProvider = ({children}) => {

    const [state, dispatch] = useReducer(FavoritesReducer, initialState);

    useEffect(()=>{
        getData()
    },[])
    
    const getData =  async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('as-favorites');
            const initialFavs = jsonValue != null ? JSON.parse(jsonValue) : [];
            initialFavorites(initialFavs)
            
          } catch (e) {
           console.log(e)
          }
    };
   
    const addFavorites = (favorite) => {
        dispatch({type: 'ADD_FAVORITES', payload: favorite})
    }

    const removeFavorites = (favorite) => {
        dispatch({type: 'REMOVE_FAVORITES', payload: favorite})
        
    }

    const initialFavorites= (arrayFavorites) => {
        dispatch({type: 'INITIAL_FAVORITES', payload: arrayFavorites})
    }
    return (
        <FavoritesContext.Provider
         value={{state,addFavorites,removeFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}