import { createContext } from "react";

export const initialState = {
    favorites: []
};

export const FavoritesContext = createContext({initialState});