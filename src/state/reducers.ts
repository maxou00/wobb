import { combineReducers } from "redux";
import { globalReducer } from "./reducers/globalState";
import { userReducer } from "./reducers/userState";

export const baseReducer = combineReducers({
    userState: userReducer,
    globalState: globalReducer
})
