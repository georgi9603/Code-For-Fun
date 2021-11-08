import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getInitialProducts: (state, action) => {
            state.products = action.payload
        }
    },
})

export const { getInitialProducts } = productSlice.actions

export default productSlice.reducer