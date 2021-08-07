import { CognitoUserPool } from "amazon-cognito-identity-js"

const USER_POOL_ID = "ap-south-1_RWdvkjXBZ" 
const APP_CLIENT_ID = "7r2q8kp0ji56qdomlru9qss4g2" 

export const UserPool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: APP_CLIENT_ID,
    Storage: localStorage
})