import { Brand, Campaign, Jobs, Profile } from "../models";

export interface IAppUser {
    user: any ;
    profile?: Profile;
}

export interface GlobalState {
    campaigns: Campaign[];
    jobs: Jobs[];
    brands: Brand[];
}

export interface IAppState {
    userState: IAppUser;
    globalState: GlobalState;
}