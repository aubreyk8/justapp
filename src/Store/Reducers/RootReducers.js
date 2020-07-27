import {combineReducers} from "redux";
import User from './UserReducers';
import Shopping from  './ShoppingReducers';

const rootReducer = combineReducers({
    User: User,
    Shopping: Shopping,
});

export default rootReducer;
