import { useSelector } from "react-redux";
import { IAppState } from ".";

export function useAppUser() {
    return useSelector((state: IAppState) => state.userState);
}