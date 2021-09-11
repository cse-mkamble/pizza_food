import axios from "axios"
import { constants } from "../constants"
import { clearFromCart } from "./cartActions"

export const placeOrder = (subTotal, lattLngt, address) => async (dispatch, getState) => {
    const user = getState().loginUserReducer.user
    const cartItems = getState().cartReducer.cartItems
    dispatch({ type: constants.PLACE_ORDER_REQUEST })
    try {
        const res = await axios.post(`/api/orders/placeorder`, { subTotal, lattLngt, address, user, cartItems })
        dispatch({ type: constants.PLACE_ORDER_SUCCESS })
    } catch (error) {
        dispatch({ type: constants.PLACE_ORDER_FAILED, payload: error })
    }
    dispatch(clearFromCart())
}

export const getUserOrders = () => async (dispatch, getState) => {
    const user = getState().loginUserReducer.user
    dispatch({ type: constants.GET_USER_ORDERS_REQUEST })
    try {
        const res = await axios.post(`/api/orders/getuserorders`, { user_id: user._id })
        dispatch({ type: constants.GET_USER_ORDERS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: constants.GET_USER_ORDERS_FAILED, payload: error })
    }
}


export const getAllOrders = () => async (dispatch, getState) => {
    dispatch({ type: constants.GET_ALL_ORDERS_REQUEST })
    try {
        const res = await axios.get(`/api/orders/getallorders`)
        dispatch({ type: constants.GET_ALL_ORDERS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: constants.GET_ALL_ORDERS_FAILED, payload: error })
    }
}

export const deliverOrder = (orderId) => async dispatch => {
    try {
        const res = await axios.post(`/api/orders/deliverorder`, {orderId})
        alert('Order Delivered')
        const data = await axios.get(`/api/orders/getallorders`)
        dispatch({ type: constants.GET_ALL_ORDERS_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({ type: constants.GET_ALL_ORDERS_FAILED, payload: error })
    }
}