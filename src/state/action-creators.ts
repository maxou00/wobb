import { mainModule } from "process";
import { Brand, Campaign, Jobs, Profile } from "../models";
import { IAction } from "./actions";

export function setCurrentUser(user: any): IAction{
    return {
        type: 'set_active_user',
        user
    }
}

export function setUserProfile(profile: Profile): IAction {
    return {
        type: 'set_user_profile',
        profile
    }
}

export function signUserOut(): IAction {
    return {
        type: 'unset_active_user'
    }
}


export function setBrands(brands: Brand[]):IAction {
    return {
        type: "set_brands",
        brands
    }
}

export function setCampaigns(campaigns: Campaign[]):IAction {
    return {
        type: "set_campaigns",
        campaigns
    }
}

export function appendBrand(brand: Brand): IAction {
    return {
        type: "append_brand",
        brand
    }
}

export function appendCampaign(campaign: Campaign): IAction {
    return {
        type: "append_campaign",
        campaign
    }
}

export function removeBrand(brandId: string):IAction {
    return {
        type: "remove_brand",
        brandId
    }
}

export function removeCampaign(campaignId: string): IAction {
    return {
        type: "remove_campaign",
        campaignId
    }
}

export function setJobs(jobs: Jobs[]):IAction {
    return {
        type: "set_jobs",
        jobs
    }
}

export function appendJob(job: Jobs): IAction {
    return {
        type: "append_jobs",
        job
    }
}

export function removeJob(job: Jobs): IAction {
    return {
        type: "remove_jobs",
        jobId: job.id
    }
}