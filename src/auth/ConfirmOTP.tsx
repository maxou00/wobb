import { Box } from "@material-ui/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
import { OTPInput } from "../components/OTPInput";
import { userFromUname } from "../core/utils";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/ConfirmOtp.module.scss";

export function ConfirmOTP() {
    const [loading, setLoading] = useState(false);
    
    const user = useMemo(() => {
        return userFromUname();
    }, []);

    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.replace(Routes.Signup);
        }
    }, [user, history]);

    const onResendOtp = useCallback(() => {
        if (loading) {
            return;
        }
        setLoading(true);
        user?.resendConfirmationCode((err, result) => {
            setLoading(false);
            if (err) {
                toast.error(err.message);
            }
            else if (result) {
                toast.success(
                    __tr("msgOtpCodeSent")
                )
            }
        })
    }, [loading,user]);

    const confirmOTP = useCallback((otp: string) => {

        if (loading) {
            return;
        }

        if (otp && user) {
            setLoading(true);
            user?.confirmRegistration(otp, true, (err, result) => {
                setLoading(false);
                if (err) {
                    toast.error(err.message);
                }
                else if (result) {
                    /// account verification is now complete.
                    toast.success(
                        __tr("msgAccountCodeVerified")
                    )
                    history.replace(Routes.Home);
                }
            });
        }
    }, [loading, history, user]);

    return <div className={styles.loginWrapper}>
        <h3>{__tr("welcomeToWobb")}</h3>
        <div className={styles.formWrapper}>
            <h3>{__tr("verifyEmailOrPhone")}</h3>
            <p className={styles.subtitle}>{__tr("pleaseEnterOtp")}</p>
            <form action="" className={styles.form}>
                <Box marginY={2}>
                    <OTPInput length={6} onChange={confirmOTP} />
                </Box>  
                {loading && <Box marginY={2} width={'100%'} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <PropagateLoader size={12} color={CssVariables.colorPrimary} />
                </Box>}
                <Box marginY={2} marginTop={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <button type="button" className={styles.resendBtn} onClick={onResendOtp}>{__tr("resendOtp")}</button>
                </Box>
            </form>
        </div>
    </div>
}