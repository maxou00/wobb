import { Auth } from "aws-amplify";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from ".";
import { setBrands, setCurrentUser, setUserProfile } from "./action-creators";
import { cognitoUserAttributesToObject } from "./utils";
import { DataStore } from "aws-amplify"
import { Profile } from "../models";
import { CognitoUser } from "@aws-amplify/auth";
import { Brand } from "../models";

export function initializeState(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        return new Promise(async (res, rej) => {
            try {
                await dispatch(fetchCognitoUser());
                await dispatch(fetchUserProfile());
                await dispatch(fetchUserBrands());
                res(true);
            } catch (error) {
                res(false);
            }
        })
    }
}

export function fetchCognitoUser(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        return new Promise(async (res, rej) => {
            try {
                const user = await Auth.currentAuthenticatedUser();
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

export function fetchUserProfile(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        let cognitoUser = await Auth.currentAuthenticatedUser() as CognitoUser;
        if (cognitoUser) {
            let attributes = await Auth.userAttributes(cognitoUser);
            let properties = cognitoUserAttributesToObject(attributes);
            if (properties.sub) {
                let profile = (await DataStore.query(Profile, p => p.uid("eq", properties.sub)))[0];
                if (profile) {
                    dispatch(setUserProfile(profile));
                }
            }
        }
    }
}

export function fetchUserBrands(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        return new Promise(async (res, rej) => {
            try {
                let user = getState().userState.user;
                if(user) {
                    let brands = await DataStore.query(Brand, b => b.uid("eq", user.sub));
                    dispatch(setBrands(brands));
                }
                res(true);
            } catch (error) {
                res(false);
            }
        })
    }
}