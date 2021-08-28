import { CognitoUserAttribute } from "amazon-cognito-identity-js";

export function cognitoUserAttributesToObject(data: CognitoUserAttribute[]) {
    let obj: any = {};
    data.forEach((at) => {
        obj[at.Name] = at.Value;
    })
    return obj;
}