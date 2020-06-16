import * as actionTypes from "../actionConstants/index"
const initialState = {
    orderedFoods: [],
    total: 0,
    discount: 0,
    people: 0

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                orderedFoods: [...state.orderedFoods, action.payload.order],
                total: state.total + action.payload.total,
                discount: state.discount + action.payload.discount,
                people: state.people + action.payload.people
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                orderedFoods: state.orderedFoods.filter(order => order.food_id !== action.payload),
                total: state.total - action.payload.total,
                discount: state.discount + action.payload.discount,
                people: state.people + action.payload.people

            }
        case actionTypes.EMPTY_CART:

            return {
                ...state,
                orderedFoods: action.payload.order,
                total: action.payload.total,
                discount: action.payload.discount,
                people: action.payload.people

            }
        default:
            return state;



    }
};
export default reducer