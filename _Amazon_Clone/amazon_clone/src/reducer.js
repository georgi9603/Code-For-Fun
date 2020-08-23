export const initialState = {
    shoppingCart: [],
    user: null
};

export const actionTypes = {
    SET_USER: "SET_USER",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
};

export const getBasketTotal = shoppingCart =>
    shoppingCart?.reduce((amount, product) => product.price + amount, 0);

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
        default:
            return state;
    }
}

export default reducer;