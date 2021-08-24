import { CognitoUser } from "amazon-cognito-identity-js";

export interface ISetActiveUser {
    type: 'set_active_user',
    user: CognitoUser;
}

export interface IUnsetActiveUser {
    type: 'unset_active_user'
}

export type IUserActions = ISetActiveUser | IUnsetActiveUser;