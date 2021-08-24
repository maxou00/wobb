import { CognitoUserPool } from "amazon-cognito-identity-js"

const USER_POOL_ID = "ap-south-1_o8VrZfflZ" 
const APP_CLIENT_ID = "46lf0151blbqvclk1kpf9plph3" 

export const UserPool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: APP_CLIENT_ID,
    Storage: localStorage
})