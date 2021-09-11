import { combineReducers } from "redux";
import { getAllPizzasReducer, addPizzaReducer, getPizzaByIdReducer, editPizzaReducer } from "./pizzaReducer";
import { cartReducer } from "./cartReducer";
import { registerUserReducer, loginUserReducer, getAllUserReducer } from "./userReducer";
import { placeOrderReducer, getUserOdersReducer, getAllOdersReducer } from "./orderReducer";

const rootReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOdersReducer: getUserOdersReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    editPizzaReducer: editPizzaReducer,
    getAllOdersReducer: getAllOdersReducer,
    getAllUserReducer: getAllUserReducer
});

export default rootReducer;