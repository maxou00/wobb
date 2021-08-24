import { CognitoUser } from "amazon-cognito-identity-js";

export interface IAppUser {
    user: CognitoUser | null ;
}

export interface IAppState {
    userState: IAppUser;
}