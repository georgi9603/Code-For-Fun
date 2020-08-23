export const initialState = {
    shoppingCart: [
        {
            key: 11,
            id: 1,
            title: "Smartphone",
            price: 999.99,
            imgURL: "https://images.unsplash.com/photo-1578653883821-89a75dcbf391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
            rating: 5
        },
        {
            key: 11,
            id: 2,
            title: "Mixer",
            price: 123,
            imgURL: "https://images.unsplash.com/photo-1578653883821-89a75dcbf391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
            rating: 5
        },
        {
            key: 11,
            id: 3,
            title: "Creme",
            price: 234,
            imgURL: "https://images.unsplash.com/photo-1578653883821-89a75dcbf391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
            rating: 5
        }
    ]
};

export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART"
};

export const getBasketTotal = shoppingCart =>
    shoppingCart?.reduce((amount, product) => product.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}

export default reducer;