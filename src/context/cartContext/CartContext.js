import { createContext } from "react";

export const initialState = {
    cart: []
};

export const CartContext = createContext({initialState});