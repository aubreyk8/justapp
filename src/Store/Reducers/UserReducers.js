import {SIGN_IN, SIGN_UP, PASSWORD_RESET} from "../Types";

export default function (state = {}, action) {
    switch (action.type) {
        case SIGN_IN:
            return state;
        case SIGN_UP:
            return state;
        case PASSWORD_RESET:
            return state;
        default:
            return state;
    }
}
