export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_CART':
      return {
        ...state,
        cart: action.payload,
      };

    case 'REMOVE_TO_CART':
      return {
        ...state,
        cart: state.cart.filter(product => {
          return product.id !== action.payload.id;
        }),
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};
