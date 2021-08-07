

export const Validators = {
    isEmail: function (str: string) {
        return str.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    },

    isPhone: function (str: string) {
        return str.match(/^\+([0-9]{1,5})\s+([0-9]{4,11})$/);
    },

    isEmailOrPhone: function (str: string) {
        return Boolean(this.isEmail(str)) || Boolean(this.isPhone(str));
    },
    
    isValidPassword: function (str: string) {
        return str.trim().length >= 6; /// can be updated later to include stage based validation.
    },

    isValidName: function (str: string) {
        return str.trim().length >= 3 /// can be updated later to include stage based validation.
    }  
}