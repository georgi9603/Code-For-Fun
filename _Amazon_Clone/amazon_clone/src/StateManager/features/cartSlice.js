import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shoppingCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const objIndex = state.shoppingCart.findIndex((product => product.id === action.payload.id));
            if (objIndex === -1) {
                action.payload.quantity = 1;
                state.shoppingCart = [...state.shoppingCart, action.payload]
            } else {
                state.shoppingCart[objIndex].quantity += 1;
            }
        },
        increaseQuantity: (state, action) => {
            const objIndex = state.shoppingCart.findIndex((product => product.id === action.payload.id));
            if (objIndex !== -1) {
                state.shoppingCart[objIndex].quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const objIndex = state.shoppingCart.findIndex((product => product.id === action.payload.id));
            if (objIndex !== -1) {
                state.shoppingCart[objIndex].quantity -= 1;

                if (state.shoppingCart[objIndex].quantity === 0) {
                    state.shoppingCart.splice(objIndex, 1);
                }
            }
        },
        removeProductFromCart: (state, action) => {
            const newShoppingCart = state.shoppingCart.filter(product => product.id !== action.payload)
            state.shoppingCart = newShoppingCart;
        },
        clearCart: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { addProductToCart, increaseQuantity, decreaseQuantity, removeProductFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer