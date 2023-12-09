import { combineReducers } from "redux";
import accountReducer from './account';
import usersReducer from './users';

let reducers = combineReducers({
    account: accountReducer,
    users: usersReducer,
})

export default reducers;

