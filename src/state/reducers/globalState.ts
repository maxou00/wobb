import { GlobalState } from ".."
import { IAction } from "../actions"

const initialState: GlobalState = {
    campaigns: [],
    jobs: [],
    brands: []
}

export const globalReducer = (state: GlobalState = initialState, action: IAction) => {
    let next = {...state};
    if(action.type === 'set_campaigns') {
        next.campaigns = action.campaigns;
    }
    else if(action.type === 'set_brands') {
        next.brands = action.brands;
    }
    else if(action.type === 'set_jobs') {
        next.jobs = action.jobs;
    }
    else if(action.type === 'append_brand') {
        let brandIndex = next.brands.findIndex((b) => {
            return b.id === action.brand.id;
        })
        if(brandIndex === -1) {
            next.brands = [action.brand, ...next.brands];
        }
        else {
            next.brands[brandIndex] = action.brand
        }
    }
    else if(action.type === 'append_campaign') {
        let campaignIndex = next.campaigns.findIndex((c) => {
            return c.id === action.campaign.id;
        })
        if(campaignIndex === -1) {
            next.campaigns = [action.campaign, ...next.campaigns];
        }
        else {
            next.campaigns[campaignIndex] = action.campaign
        }
    }
    else if(action.type === 'append_jobs') {
        let jobIndex = next.jobs.findIndex((b) => {
            return b.id === action.job.id;
        })
        if(jobIndex === -1) {
            next.jobs = [action.job, ...next.jobs];
        }
        else {
            next.brands[jobIndex] = action.job;
        }
    }
    else if(action.type === 'remove_brand') {
        next.brands = next.brands.filter((b) => {
            return b.id !== action.brandId;
        })
    }
    else if(action.type === 'remove_campaign') {
        next.campaigns = next.campaigns.filter((c) => c.id !== action.campaignId)
    }
    else if(action.type === 'remove_jobs') {
        next.jobs = next.jobs.filter((j) => j.id !== action.jobId)
    }
    return next;
}