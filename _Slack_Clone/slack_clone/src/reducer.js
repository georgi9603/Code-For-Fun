import { actionTypes } from './stateManagement/actions/actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;