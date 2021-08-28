import { Auth } from "aws-amplify";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from ".";
import { setCurrentUser } from "./action-creators";
import { cognitoUserAttributesToObject } from "./utils";

export function initializeState(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        return new Promise( async (res, rej) => {
            const user = await Auth.currentAuthenticatedUser()
            if (user) {
                let attributes = await Auth.userAttributes(user);
                let obj = cognitoUserAttributesToObject(attributes);
                dispatch(setCurrentUser(obj));
                res(true);
            }
            else {
                res(false);
            }
            res(false);
        })
    }
}