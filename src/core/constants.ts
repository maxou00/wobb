import { CognitoUserPool } from "amazon-cognito-identity-js"

export const USER_POOL_ID = "ap-south-1_o8VrZfflZ" 
export const APP_CLIENT_ID = "46lf0151blbqvclk1kpf9plph3" 
export const POOL_ARN = "arn:aws:cognito-idp:ap-south-1:431104670392:userpool/ap-south-1_o8VrZfflZ";
export const POOL_REGION = 'ap-south-1';

export const UserPool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: APP_CLIENT_ID,
    Storage: localStorage
})