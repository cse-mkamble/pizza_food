import { constants } from "../constants"

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {

    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity
    }

    if (cartItem.quantity > 10) {
        alert('You cannot add more than 10 quantities')
    } else {
        if (cartItem.quantity < 1) {
            dispatch({ type: constants.DELETE_FROM_CART, payload: pizza })
        } else {
            dispatch({ type: constants.ADD_TO_CART, payload: cartItem })
        }
    }

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: constants.DELETE_FROM_CART, payload: pizza })

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const clearFromCart = () => (getState) => {
    localStorage.removeItem('cartItems')
    window.location.href = '/'
}