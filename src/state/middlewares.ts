import { Auth } from "aws-amplify";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from ".";
import { setCurrentUser } from "./action-creators";
import { cognitoUserAttributesToObject } from "./utils";

export function initializeState(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        return new Promise(async (res, rej) => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                let attributes = await Auth.userAttributes(user);
                let obj = cognitoUserAttributesToObject(attributes);
                dispatch(setCurrentUser(obj));
                res(true);
            } catch (error) {
                res(false);
            }
        })
    }
}