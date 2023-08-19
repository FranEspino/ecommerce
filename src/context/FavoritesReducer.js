export const FavoritesReducer = (state, action) => {
    switch (action.type) {
        case "INITIAL_FAVORITES":
            return {
                ...state,
                favorites: action.payload
            }

        case 'ADD_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_FAVORITES':
            return {
                ...state,
                favorites: state.favorites.filter(product => {
                    return product.id !== action.payload.id;
                })
            }
        default:
            return state;
    }

}