import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { baseReducer } from "./reducers";

export const store = createStore(baseReducer, applyMiddleware(thunk));

(window as any).store = store;