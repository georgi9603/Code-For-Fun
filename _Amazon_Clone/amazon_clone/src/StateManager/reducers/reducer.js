import { actionTypes } from '../actions/actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.ADD_TO_CART:
            const objIndex = state.shoppingCart.findIndex((product => product.id === action.product.id));
            if (objIndex === -1) {
                action.product.quantity = 1;
                state.shoppingCart = [...state.shoppingCart, action.product];
            } else {
                state.shoppingCart[objIndex].quantity++;
            }

            console.log(state.shoppingCart)
            return {
                ...state,
                shoppingCart: state.shoppingCart
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