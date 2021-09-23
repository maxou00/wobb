import { Auth } from "aws-amplify";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from ".";
import { appendJob, setBrands, setCampaigns, setCurrentUser, setJobs, setUserProfile, appendCampaign } from "./action-creators";
import { cognitoUserAttributesToObject } from "./utils";
import { DataStore } from "aws-amplify"
import { Profile } from "../models";
import { CognitoUser } from "@aws-amplify/auth";
import { Brand } from "../models";
import { Campaign, User, Jobs } from "../models";

export function initializeState(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        return new Promise(async (res, rej) => {
            try {
                await dispatch(fetchCognitoUser());
                await dispatch(fetchUserProfile());
                await dispatch(fetchUserBrands());
                await dispatch(fetchUserCampaigns());
                await dispatch(fetchUserJobs());
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
                if (user) {
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

export function fetchUserCampaigns(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        return new Promise(async (res, rej) => {
            try {
                let user = getState().userState.user;
                if (user) {
                    let campaigns = await DataStore.query(Campaign, c => c.uid("eq", user.sub));
                    dispatch(setCampaigns(campaigns));
                }
                res(true);
            } catch (error) {
                res(false);
            }
        })
    }
}

export function fetchUserJobs(): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        return new Promise(async (res, rej) => {
            try {
                let { user } = getState().userState;
                if (user) {
                    let jobs = await DataStore.query(Jobs, j => j.uid("eq", user.sub));

                    await Promise.all(jobs.map(async(job) => {
                        return DataStore.query(Campaign, c => c.id("eq", job.campaignID || ""))
                        .then((match) => {
                            if(match.length > 0) {
                                dispatch(appendCampaign(match[0]))
                            }
                        })
                    }))
                    dispatch(setJobs(jobs));
                }
                res(true);
            } catch (error) {
                res(false);
            }
        })
    }
}

export function applyForCampaign(campaign: Campaign, bidPrice: {amount: number, currency: string}): ThunkAction<Promise<any>, IAppState, {}, AnyAction> {
    return async (dispatch, getState) => {
        let {user, profile} = getState().userState
        return new Promise(async (res, rej) => {
            let amplifyUser = (await DataStore.query(User, u => u.uid("eq", user.sub)))[0];
            if (!amplifyUser) {
                amplifyUser = await DataStore.save<User>(
                    new User(
                        {
                            uid: user.sub,
                            name: profile?.name || user.name,
                            imageUrl: "",
                            status: user.role || "influencer"
                        }
                    )
                )
            }
            
            let job = await DataStore.save(
                new Jobs({
                    campaignID: campaign.id,
                    uid: user.sub,
                    appliedAt: new Date(Date.now()).toISOString(),
                    Infleuncer: amplifyUser,
                    bidPrice: bidPrice.amount,
                    bidCurrency: bidPrice.currency
                })
            )

            dispatch(appendJob(job));
            dispatch(appendCampaign(campaign));

            res(true);
        })
    }
}