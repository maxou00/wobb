import { IAppUser } from "..";
import { IAction } from "../actions";

const initialState: IAppUser = {
    user: null
}

export function userReducer(state: IAppUser = initialState, action: IAction): IAppUser {
    if(action.type === 'set_active_user') {
        return {...state, user: action.user};
    }
    else if(action.type === 'set_user_profile') {
        return {...state, profile: action.profile}
    }
    else if(action.type === 'unset_active_user') {
        return {...state, user: null}
    }
    return state;
}