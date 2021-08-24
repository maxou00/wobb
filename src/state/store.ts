import { applyMiddleware, createStore } from "redux";
import { baseReducer } from "./reducers";

export const store = createStore(baseReducer, applyMiddleware());