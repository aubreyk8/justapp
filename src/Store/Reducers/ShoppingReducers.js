import {PRODUCT_LOOKUP} from "../Types";

export default function (state = {}, action) {
    switch (action.type) {
        case PRODUCT_LOOKUP:
            return state;
        default:
            return state;
    }
}
