import * as actionTypes from "../actionConstants/index"
const initialState = {
    orderedFoods: [],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                orderedFoods: [...state.orderedFoods, action.payload]

            }
        case actionTypes.REMOVE_FROM_CART:
            return {

            }
        default:
            return state;



    }
};
export default reducer