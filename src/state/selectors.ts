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
