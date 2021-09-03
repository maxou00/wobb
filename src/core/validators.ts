

export const Validators = {
    isEmail(str: string) {
        return str && str.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    },
    isPhone(str: string) {
        return str && str.match(/^\+([0-9]{1,5})\s+([0-9]{4,11})$/);
    },
    isEmailOrPhone(str: string) {
        return Boolean(this.isEmail(str)) || Boolean(this.isPhone(str));
    },
    isValidPassword(str: string) {
        return str.trim().length >= 6 && str.match(/[A-Z]/) && str.match(/[a-z]/) && str.match(/[0-9]/) && str.match(/[[@:;./$*#!]]/) /// can be updated later to include stage based validation.
    },
    isValidName(str: string) {
        return str.length >= 3 && str.length <= 30 /// can be updated later to include stage based validation.
    },
    isCampaignName(str: string) {
        return str.length <= 40;
    },
    isCashAmount(str: string) {
        let parsed = parseInt(str);
        return parsed > 0 && parsed < 100000;
    },
    isCoins(str: string) {
        let parsed = parseInt(str);
        return parsed > 0 && parsed < 100000;
    },
    isBarterAmount(str: string) {
        let parsed = parseInt(str);
        return parsed > 0 && parsed < 100000;
    },
    isInfluencerName(str: string) {
        return this.isValidName(str)
    },
    isBidPrice(str: string) {
        let parsed = parseInt(str);
        return parsed > 0 && parsed < 100000;
    },
    isUsername(str: string) {
        return this.isValidName(str);
    },
    isBio(str: string) {
        return str.length > 0 && str.trim().length <= 150;
    },
    isLink(str: string) {
        return str.length > 0 && str.match(/((http|https):\/\/)?.*(\.[a-z]{2,5}).*/)
    },
    isDate(str: string) {
        return str && str.match(/^([0-9]{1,2})\/([0-9]{1,2})\/((1|2)[0-9]{3})$/)
    },
    isComment(str: string) {
        return str.length > 0 && str.length <= 2000;
    },
    maxSocialMedias() {
        return 5;
    },
    isPromotionGoals(str: string) {
        return str.length > 0 && str.length <= 50;
    },
    isProductMRP(str: string) {
        let parsed = parseInt(str);
        return parsed > 0 && parsed < 100000;
    },
    isCashPayout(str: string) {
        let parsed = parseInt(str);
        return parsed > 0 && parsed < 1000000;
    },
    isTaskOverview(str: string) {
        return str.length > 0 && str.length <= 4000
    },
    isContentApproval(str: string) {
        return str && str.length > 0 && str.length <= 2000;
    },
    isViewCount(str: string) {
        return str.length > 0 && str.length < 4;
    },
    isGSTNumber(str: string) {
        return str.match(/^([0-9]{15})$/);
    },
    isPANNumber(str: string) {
        return str.match(/^([0-9]{10})$/);
    },
    isPinCode(str: string) {
        return str.match(/^([0-9]{6})$/);
    },
    isAddress(str: string) {
        return str.length > 0 && str.length <= 50;
    }
}