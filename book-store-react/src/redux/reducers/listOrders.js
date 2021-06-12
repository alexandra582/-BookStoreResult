import {SetListOrdersAction} from "../actions/listOrders";

/**
 * initial state of the book list
 * @type {{ListOrders: []}}
 */
const initialState = {
    listOrders: []
}

/**
 * The reducer function
 * @param state
 * @param action
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SetListOrdersAction: return {
            ...state,
            listOrders: action.payload
        }
        default:
            return state;
    }
}


