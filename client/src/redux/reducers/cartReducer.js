import { constants } from "../constants"

export const cartReducer = (state = {
    cartItems: []
}, action) => {

    switch (action.type) {
        case constants.ADD_TO_CART:
            const alreadyExists = state.cartItems.find((item) => item._id === action.payload._id)
            if (alreadyExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item._id === action.payload._id ? action.payload : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }

        case constants.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item._id !== action.payload._id)
            }

        default:
            return state

    }
}