import { Box } from "@material-ui/core";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../components/Loader";
import { OTPInput } from "../components/OTPInput";
import { SingleLineInput } from "../components/SingleLineInput";
import { userFromUname } from "../core/utils";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/ConfirmOtp.module.scss";

export function ResetPassword() {
    const [otp, setOTP] = useState("");
    const [errors, setErrors] = useState<any>({});
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
        user?.forgotPassword({
            onSuccess: (data) => {
                setLoading(false);
                toast.success(
                    __tr("msgOtpCodeSent")
                )
            },
            onFailure: (err) => {
                setLoading(false);
                toast.error(err.message);
            }
        })
    }, [loading, user]);

    const onCompleted = useCallback((ev: ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (loading) {
            return;
        }

        if (!otp) {
            toast.warn(__tr("pleaseEnterOtp"));
            return;
        }

        if (otp && user) {
            let form = ev.currentTarget;

            let newErrors: any = {};
            let password = form.newPassword.value;
            let confirm = form.confirmPassword.value;

            if (!Validators.isValidPassword(password)) {
                newErrors.newPassword = __tr("errorInvalidPassword");
            }
            else {
                if (confirm !== password) {
                    newErrors.confirmPassword = __tr("errorPasswordDontMatch");
                }
            }

            setErrors(newErrors);

            if (Object.keys(newErrors).length > 0) {
                return;
            }

            setLoading(true);

            user?.confirmPassword(otp, password, {
                onSuccess() {
                    setLoading(false);
                    toast.success(__tr("passwordReset"));
                    history.replace(Routes.Login);
                },
                onFailure(err) {
                    toast.error(__tr("failurePasswordReset"))
                }
            });
        }
    }, [loading, history, user, otp]);


    return <div className={styles.loginWrapper}>
        <div className={styles.formWrapper}>
            <h3>{__tr("btnResetPassword")}</h3>
            <p className={styles.subtitle}>{__tr("pleaseEnterOtp")}</p>
            <form action="" className={styles.form} onSubmit={onCompleted}>
                {
                    loading && <Loader/>
                }
                <Box marginY={2} marginTop={6}>
                    <OTPInput length={6} onChange={setOTP} />
                </Box>
                <Box marginY={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <button className={styles.resendBtn} onClick={onResendOtp}>{__tr("resendOtp")}</button>
                </Box>
                {
                    otp && <>
                        <Box marginY={2}>
                            <SingleLineInput
                                label={__tr("labelCreatePassword")}
                                name="newPassword"
                                placeholder='john@example.com'
                                type="password"
                                error={errors.newPassword} />
                        </Box>
                        <Box marginY={2}>
                            <SingleLineInput
                                label={__tr("labelConfirmPassword")}
                                name="confirmPassword"
                                placeholder={__tr("placeholderSignupPassword")}
                                type="password"
                                error={errors.confirmPassword} />
                        </Box>
                        <Box marginY={4}>
                            <button type="submit" className={styles.btnSubmit}>{__tr("btnSubmit")}</button>
                        </Box>
                    </>
                }
            </form>
        </div>
    </div>
}