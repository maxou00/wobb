import { CognitoUser } from "amazon-cognito-identity-js";
import { Brand, Campaign, Profile } from "../models";

interface ISetActiveUser {
    type: 'set_active_user',
    user: CognitoUser;
}

interface IUnsetActiveUser {
    type: 'unset_active_user'
}

interface ISetUserProfile {
    type: 'set_user_profile',
    profile: Profile;
}

type IUserActions = ISetActiveUser | IUnsetActiveUser | ISetUserProfile;

interface SetCampaigns {
    type: 'set_campaigns';
    campaigns: Campaign[];
}

interface AppendCampaign {
    type: 'append_campaign';
    campaign: Campaign;
}

interface RemoveCampaign {
    type: 'remove_campaign';
    campaignId: string;
}

interface SetBrands {
    type: 'set_brands';
    brands: Brand[];
}

interface AppendBrand {
    type: 'append_brand';
    brand: Brand;
}

interface RemoveBrand {
    type: 'remove_brand';
    brandId: string;
}

type IGlobalActions = SetBrands | AppendBrand | RemoveBrand
    | SetCampaigns | AppendCampaign | RemoveCampaign;

export type IAction = IUserActions | IGlobalActions