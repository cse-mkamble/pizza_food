import axios from "axios"
import { constants } from "../constants"

export const getAllPizzas = () => async dispatch => {
    dispatch({ type: constants.GET_PIZZAS_REQUEST })
    try {
        const res = await axios.get(`/api/pizzas/getallpizzas`)
        dispatch({ type: constants.GET_PIZZAS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: constants.GET_PIZZAS_FAILED, payload: error })
    }
}

export const filterPizzas = (searchKey, category) => async dispatch => {
    var filterPizzas
    dispatch({ type: constants.GET_PIZZAS_REQUEST })
    try {
        const res = await axios.get(`/api/pizzas/getallpizzas`)
        if (searchKey && (category != 'all')) {
            filterPizzas = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
            filterPizzas = filterPizzas.filter(pizza => pizza.category.toLowerCase() == category)
        } else if (category != 'all') {
            filterPizzas = res.data.filter(pizza => pizza.category.toLowerCase() == category)
        } else {
            filterPizzas = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
        }
        dispatch({ type: constants.GET_PIZZAS_SUCCESS, payload: filterPizzas })
    } catch (error) {
        dispatch({ type: constants.GET_PIZZAS_FAILED, payload: error })
    }
}

export const addPizza = (pizza) => async dispatch => {
    dispatch({ type: constants.ADD_PIZZA_REQUEST })
    try {
        const res = await axios.post(`/api/pizzas/addpizza`, { pizza })
        dispatch({ type: constants.ADD_PIZZA_SUCCESS })
    } catch (error) {
        dispatch({ type: constants.ADD_PIZZA_FAILED, payload: error })
    }
}

export const getPizzaById = (pizzaid) => async dispatch => {
    dispatch({ type: constants.GET_PIZZABYID_REQUEST })
    try {
        const res = await axios.post(`/api/pizzas/getpizzabyid`, { pizzaid })
        dispatch({ type: constants.GET_PIZZABYID_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: constants.GET_PIZZABYID_FAILED, payload: error })
    }
}

export const editPizza = (editedpizza) => async dispatch => {
    dispatch({ type: constants.EDIT_PIZZA_REQUEST })
    try {
        const res = await axios.post(`/api/pizzas/editpizza`, { editedpizza })
        dispatch({ type: constants.EDIT_PIZZA_SUCCESS })
        window.location.href = '/admin/pizzaslist'
    } catch (error) {
        dispatch({ type: constants.EDIT_PIZZA_FAILED, payload: error })
    }
}

export const deletePizza = (pizzaid) => async dispatch => {
    try {
        const res = await axios.post(`/api/pizzas/deletepizza`, { pizzaid })
        alert('Food Delete Successfully.')
        window.location.reload()
    } catch (error) {
        alert('Something went wrong.')
    }
}