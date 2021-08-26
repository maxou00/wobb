import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from ".";
import { UserPool } from "../core/constants";
import { setCurrentUser } from "./action-creators";
import { cognitoUserDataToObject } from "./utils";

export function initializeState(): ThunkAction<any, IAppState, {}, AnyAction> {
    return (dispatch, getState) => {
        const user = UserPool.getCurrentUser();
        if (user) {
            user.getUserData((err, data) => {
                if (data) {
                    dispatch(setCurrentUser(cognitoUserDataToObject(data)));
                }
            })
        }
    }
}
