import { combineReducers } from "redux";
import { userReducer } from "./reducers/userState";

export const baseReducer = combineReducers({
    userState: userReducer
})
