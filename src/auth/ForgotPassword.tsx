import { Box } from "@material-ui/core";
import { CognitoUser } from "amazon-cognito-identity-js";
import { ChangeEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { EmailOrPhone } from "../components/EmailOrPhone";
import { Loader } from "../components/Loader";
import { UserPool } from "../core/constants";
import { persistUname } from "../core/utils";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/Login.module.scss";
import { ResetPassword } from "./ResetPassword";

export function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [hasPendingOTP, setHasPendingOTP] = useState(false);

    const onSubmit = useCallback((ev:ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();
        let user = new CognitoUser({
            Username: emailOrPhone,
            Pool: UserPool
        })

        setLoading(true);
        user.forgotPassword({
            onSuccess: (res) => {
                setLoading(false);
                persistUname(emailOrPhone);
                toast.success(
                    __tr("pleaseEnterOtp")
                )
                setHasPendingOTP(true);
            },

            onFailure: (res) => {
                setLoading(false);
                setHasPendingOTP(false);
                toast.error(res.message);
            },
        })
    },[emailOrPhone]);

    if(hasPendingOTP) {
        return <ResetPassword/>
    }

    return <div className={styles.loginWrapper}>
        <div className={styles.formWrapper}>
            <h3>{__tr("forgotPassword")}</h3>
            <p className={styles.subtitle}>{__tr("pleaseEnterEmail")}</p>
            <form action="" onSubmit={onSubmit} className={styles.form}>
                { loading && <Loader/> }
                <Box marginY={2} marginTop={2}>
                    <EmailOrPhone
                        label={__tr("labelEmailOrPassword")}
                        placeholder='john@example.com'
                        onChange={(val) => setEmailOrPhone(val.value)}/>
                </Box>
                <Box marginY={2}>
                    <button type="submit" className={styles.btnSubmit}>{__tr("btnResetPassword")}</button>
                </Box>
                <Box marginY={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Link to={Routes.Login} className={styles.signupLink}>{__tr("back")}</Link>
                </Box>
            </form>
        </div>
    </div>
}