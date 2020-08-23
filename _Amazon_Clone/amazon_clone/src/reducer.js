export const initialState = {
    shoppingCart: []
};

export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_TO_CART: "REMOVE_TO_CART"
};

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {

            }
        case actionTypes.REMOVE_TO_CART:
            return {

            }
        default:
            return state;
    }
}

export default reducer;