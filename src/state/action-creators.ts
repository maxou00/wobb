import { IUserActions } from "./actions";

export function setCurrentUser(user: any): IUserActions{
    return {
        type: 'set_active_user',
        user
    }
}

export function signUserOut(): IUserActions {
    return {
        type: 'unset_active_user'
    }
}

