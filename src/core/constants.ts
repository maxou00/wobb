import { CognitoUserPool } from "amazon-cognito-identity-js"

export const USER_POOL_ID = "ap-south-1_JvgIfR4Lm" 
export const APP_CLIENT_ID = "3ct47e7o25qal781b9si0hno9t" 
export const POOL_ARN = " arn:aws:cognito-idp:ap-south-1:431104670392:userpool/ap-south-1_JvgIfR4Lm";
export const POOL_REGION = 'ap-south-1';

export const UserPool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: APP_CLIENT_ID,
    Storage: localStorage
})

export const RAZORPAY_KEY_ID = "rzp_test_IZzJxe0znEPmqG";
export const INSTAGRAM_CLIENT_ID="572433830162013";
export const INSTAGRAM_RETURN_URL = "https://devapi.wobb.ai/api/dashboardv2/authcode&connect";

export const INSTAGRAM_REDIRECT = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=https://devapi.wobb.ai/api/dashboardv2/authcode&connect&scope=user_profile,user_media&response_type=code`
export const YOUTUBE_REDIRECT = "https://api.wobb.ai/api/youtube/youtubeAppAuthenticate"

export function instagramUrlWithId(id: string) {
    return INSTAGRAM_REDIRECT+'&state='+id;
}

export function youtubeUrlWithId(id: string) {
    return YOUTUBE_REDIRECT+'?state='+id;
}