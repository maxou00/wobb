import { IAppUser } from "..";
import { IUserActions } from "../actions";

const initialState: IAppUser = {
    user: null
}

export function userReducer(state: IAppUser = initialState, action: IUserActions): IAppUser {
    if(action.type === 'set_active_user') {
        return {...state, user: action.user};
    }
    else if(action.type === 'unset_active_user') {
        return {...state, user: null}
    }
    return state;
}