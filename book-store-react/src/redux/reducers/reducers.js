import {combineReducers} from 'redux';

// import partial reducers
import books from "./books";
import basket from "./basket";
import listOrders from "./listOrders";

/**
 * Combine and return all reducers to store
 */
export default combineReducers({
    // list of reducers
    books,
    basket,
    listOrders

});