import { constants } from "../constants"

export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.PLACE_ORDER_REQUEST:
            return {
                loading: true
            }
        case constants.PLACE_ORDER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case constants.PLACE_ORDER_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getUserOdersReducer = (state = {
    orders: []
}, action) => {
    switch (action.type) {
        case constants.GET_USER_ORDERS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case constants.GET_USER_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case constants.GET_USER_ORDERS_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getAllOdersReducer = (state = {
    orders: []
}, action) => {
    switch (action.type) {
        case constants.GET_ALL_ORDERS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case constants.GET_ALL_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case constants.GET_ALL_ORDERS_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}