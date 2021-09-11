import { constants } from "../constants"

export const getAllPizzasReducer = (state = {
    pizzas: []
}, action) => {
    switch (action.type) {
        case constants.GET_PIZZAS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case constants.GET_PIZZAS_SUCCESS:
            return {
                loading: false,
                pizzas: action.payload
            }
        case constants.GET_PIZZAS_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.ADD_PIZZA_REQUEST:
            return {
                loading: true,
                ...state
            }
        case constants.ADD_PIZZA_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case constants.ADD_PIZZA_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getPizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.GET_PIZZABYID_REQUEST:
            return {
                loading: true,
                ...state
            }
        case constants.GET_PIZZABYID_SUCCESS:
            return {
                loading: false,
                pizza: action.payload
            }
        case constants.GET_PIZZABYID_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const editPizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.EDIT_PIZZA_REQUEST:
            return {
                editloading: true,
                ...state
            }
        case constants.EDIT_PIZZA_SUCCESS:
            return {
                editloading: false,
                editsuccess: true
            }
        case constants.EDIT_PIZZA_FAILED:
            return {
                editloading: false,
                editerror: action.payload
            }
        default:
            return state
    }
}
