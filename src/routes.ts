
export const Routes = {
    About: '/about',
    Base: '/',
    Home: '/app',
    Discover: "/app/discover",
    discoverWithFilter(filter: string) {
        return this.Discover+"?filter="+filter;
    },
    BaseCampaigns: "/app/campaigns",
    MyCampaigns:  "/app/campaigns/:status",
    campaigns(status: string) {
        return `${this.BaseCampaigns}?filter=${status}`;
    },
    BaseViewCampaigns: "/app/campaigns/view",
    viewCampaign(id: string) {
        return `${this.BaseViewCampaigns}/${id}`
    },
    viewCampaignApplicants(campaign: string, filter: string = '') {
        return `${this.viewCampaign(campaign)}/applicants${filter ? `?filter=${filter}` : ''}`
    },
    viewCampaignTasks(campaign: string) {
        return `${this.viewCampaign(campaign)}/tasks`
    },
    PostedCampaigns: "/app/campaigns/posted",
    Messages: "/app/threads",
    Notifications: "/app/notifications",
    MyProfile: "/app/profile",
    EditProfile: "/app/profile/edit",
    Finance: "/app/finance",
    MyEarnings:"/app/finance/earnings",
    MyOrders: "/app/finance/orders",
    Affiliate: "/app/affiliate",
    SignOut: "/app/signout",
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