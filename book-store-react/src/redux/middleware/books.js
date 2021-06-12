import {GetBooksAction, SetBooks} from "../actions/books";
import {GetListOrders, GetListOrdersAction, SetListOrders} from "../actions/listOrders";

/**
 * Middleware function
 */
export default function booksMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetBooksAction:
                fetch("/books", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetBooks(response))
                )
                break;
            case GetListOrdersAction:
                fetch("/orders", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetListOrders(response))
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}