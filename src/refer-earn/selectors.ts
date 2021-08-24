import { useSelector } from "react-redux";
import { IAppState, IAppUser } from "../state";

export function useAppUser(): IAppUser {
    return useSelector((state: IAppState) => state.userState);
}
