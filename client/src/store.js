import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        user: user
    }
}

const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;