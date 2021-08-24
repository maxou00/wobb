import { UserData } from "amazon-cognito-identity-js";

export function cognitoUserDataToObject(data: UserData) {
    let obj: any = {};
    data.UserAttributes.forEach((at) => {
        obj[at.Name] = at.Value;
    })
    return obj;
}