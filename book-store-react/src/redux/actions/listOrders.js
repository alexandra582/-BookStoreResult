import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const GetListOrdersAction = "GetListOrdersAction";
export const SetListOrdersAction = "SetListOrdersAction";

/**
 * GetBasket action class
 */
export class GetListOrders extends BaseAction {
    constructor(payload = {}) {
        super(GetListOrdersAction, payload);
    }
}

/**
 * SetBasket action class
 */
export class SetListOrders extends BaseAction {
    constructor(payload) {
        super(SetListOrdersAction, payload);
    }
}