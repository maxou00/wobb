import { Brand, Campaign, Profile } from "../models";

export interface IAppUser {
    user: any ;
    profile?: Profile;
}

export interface GlobalState {
    campaigns: Campaign[];
    brands: Brand[];
}

export interface IAppState {
    userState: IAppUser;
    globalState: GlobalState;
}