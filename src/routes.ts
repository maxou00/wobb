
export const Routes = {
    About: '/about',
    Base: '/',
    Home: '/app',
    Discover: "/app/discover",
    BaseCampaigns: "/app/campaigns",
    MyCampaigns:  "/app/campaigns/:status",
    campaigns(status: "applied" | "posted") {
        return `${this.BaseCampaigns}/${status}`;
    },

    PostedCampaigns: "/app/campaigns/posted",
    Messages: "/app/threads",
    Notifications: "/app/notifications",
    MyProfile: "/app/my-profile",
    HelpAndSupport: "/support",
    Auth: '/auth',
    Login: '/auth/login',
    Signup: '/auth/signup',
    VerifyOTP: '/auth/signup/verify-otp',
    ForgotPassword: '/auth/password-forgotten',
    VerifyPasswordOTP: '/auth/password-forgotten/verify-otp',
    TermsAndCondition: '/legal/terms-and-conditions',
    PrivacyPolicies: '/legal/privacy-policies',
}