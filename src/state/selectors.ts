import { useSelector } from "react-redux";
import { IAppState } from ".";
import { CampaignStatus } from "../models";

export function useAppUser() {
    return useSelector((state: IAppState) => state.userState);
}

export function useBrands() {
    return useSelector((state: IAppState) => state.globalState.brands);
}

export function useCampaigns() {
    return useSelector((state: IAppState) => state.globalState.campaigns);
}

export function usePostedCampaigns() {
    return useSelector((state: IAppState) => {
        let user = state.userState.user;
        return state.globalState.campaigns.filter((c) => c.uid === user.sub);
    })
}

/**
 * Campaigns i've created and campaign i've applied for are kept in store.
 * For now,campaigns i own are campaigns i've posted, and campaigns i don't are those i applied for.
 */
export function useAppliedCampaigns() {
    return useSelector((state: IAppState) => {
        let user = state.userState.user;
        return state.globalState.campaigns.filter((c) => c.uid !== user.sub);
    })
}


export function useJobs() {
    return useSelector((state: IAppState) => state.globalState.jobs);
}

export function usePendingApplications() {
    return useSelector((state: IAppState) => state.globalState.jobs.filter( j => !j.status ) ) ;
}

export function useSingleJob(campaignID: string) {
    return useSelector((state: IAppState) => state.globalState.jobs.find( j => j.campaignID === campaignID ) ) ;
}