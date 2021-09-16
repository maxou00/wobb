import { GlobalState } from ".."
import { IAction } from "../actions"

const initialState: GlobalState = {
    campaigns: [],
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
    else if(action.type === 'remove_brand') {
        next.brands = next.brands.filter((b) => {
            return b.id !== action.brandId;
        })
    }
    else if(action.type === 'remove_campaign') {
        next.campaigns = next.campaigns.filter((c) => c.id !== action.campaignId)
    }
    return next;
}