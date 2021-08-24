import { CognitoUser } from "amazon-cognito-identity-js";
import { UserPool } from "./constants";
import { randomID } from "./roles";

export function nameToUsername(name: string) {
    return randomID(12);
}

export function persistUname(str: string) {
    localStorage.setItem('wobb_uname', str);
}

export function getUname() {
    return localStorage.getItem('wobb_uname') || ''
}

export function userFromUname() {
    let uname = getUname();
    if(uname) {
        return new CognitoUser({
            Username: uname,
            Pool: UserPool
        })
    }
    return null;
}