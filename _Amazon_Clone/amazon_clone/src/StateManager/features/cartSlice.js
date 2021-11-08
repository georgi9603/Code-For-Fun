import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shoppingCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.value += 1
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
        },
        removeProductFromCart: (state) => {
            state.value -= 1
        },
        clearCart: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer