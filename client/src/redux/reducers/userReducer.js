import { constants } from "../constants"

export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.USER_REGISTER_REQUEST:
            return {
                loading: true
            }
        case constants.USER_REGISTER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case constants.USER_REGISTER_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case constants.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                success: true,
                user: action.payload
            }
        case constants.USER_LOGIN_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getAllUserReducer = (state = {
    users: []
}, action) => {
    switch (action.type) {
        case constants.GET_ALL_USER_REQUEST:
            return {
                loading: true,
                ...state
            }
        case constants.GET_ALL_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case constants.GET_ALL_USER_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}