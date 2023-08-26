import { createContext } from "react";

export const initialState = {
    favorites: [],
    currentScreen: 'home',
    darkMode: 'light'
};

export const FavoritesContext = createContext({initialState});