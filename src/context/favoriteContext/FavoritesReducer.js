export const FavoritesReducer = (state, action) => {
    switch (action.type) {
        case "INITIAL_FAVORITES":
            return {
                ...state,
                favorites: action.payload,
                currentScreen: 'home'
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
        case 'CHANGE_SCREEN':
            return{
                ...state,
                currentScreen: action.payload
            }
        default:
            return state;
    }

}