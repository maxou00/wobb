import { useSelector } from "react-redux";
import { IAppState } from ".";

export function useAppUser() {
    return useSelector((state: IAppState) => state.userState);
}

export function useBrands() {
    return useSelector((state: IAppState) => state.globalState.brands);
}

export function useCampaigns() {
    return useSelector((state: IAppState) => state.globalState.campaigns);
}
