import { actionTypes } from '../actions/actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.product]
            }
        case actionTypes.REMOVE_FROM_CART:
            const newShoppingCart = state.shoppingCart.filter(product => product.id !== action.id)
            return {
                ...state,
                shoppingCart: newShoppingCart
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                shoppingCart: action.shoppingCart
            }
        case actionTypes.INITIATE_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }
        default:
            return state;
    }
}

export default reducer;