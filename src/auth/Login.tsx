import { Box } from "@material-ui/core";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { EmailOrPhone } from "../components/EmailOrPhone";
import { IconGoogle } from "../components/Icons";
import { Loader } from "../components/Loader";
import { SingleLineInput } from "../components/SingleLineInput";
import { UserPool } from "../core/constants";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/Login.module.scss";

export function Login() {
    const [loading, setLoading] = useState(false);
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [errors, setErrors] = useState<any>({});

    const history = useHistory();

    const onSubmit = useCallback((ev: React.ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();

        let form = ev.currentTarget;
        let data = {
            emailOrPhone,
            password: form.password.value
        }

        let errs: any = {};
        if (!Validators.isEmailOrPhone(data.emailOrPhone)) {
            errs.emailOrPhone = __tr("errorInvalidEmailOrPhone")
        }

        if (!Validators.isValidPassword(data.password)) {
            errs.password = __tr("errorInvalidPassword");
        }

        setErrors(errs);

        let user = new CognitoUser({
            Username: emailOrPhone,
            Pool: UserPool
        })

        let authDetails = new AuthenticationDetails({
            Username: emailOrPhone,
            Password: data.password
        })

        setLoading(true);
        user.authenticateUser(authDetails, {
            onSuccess: (res) => {
                setLoading(false);
                let accessToken = res.getAccessToken().getJwtToken();
                toast.success(
                    'authenticated'
                )
                localStorage.setItem("token", accessToken);
                history.replace(Routes.Home);
            },

            onFailure: (res) => {
                setLoading(false);
                toast.error(res.message);
            }
        })


    }, [emailOrPhone, history]);

    return <div className={styles.loginWrapper}>
        <h3>Welcome back !</h3>
        <div className={styles.formWrapper}>
            <h3>Signin</h3>
            <form action="" className={styles.form} onSubmit={onSubmit}>
                {loading && <Loader/>}
                <Box marginY={2}>
                    <EmailOrPhone
                        label="Email or phone number"
                        placeholder='john@example.com'
                        onChange={(val) => setEmailOrPhone(val.value)}
                        error={errors.emailOrPhone} />
                </Box>
                <Box marginY={2}>
                    <SingleLineInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder='Must be at least 6 characters'
                        error={errors.password} />
                </Box>
                <Box marginY={2}>
                    <Link to={Routes.ForgotPassword} className={styles.passwordRecoveryLink}>Forgot Password ?</Link>
                </Box>
                <Box marginY={2}>
                    <button type="submit" className={styles.btnSubmit}>Sign in</button>
                </Box>
                <Box marginY={4} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <div className={styles.lined}>
                        <div className={styles.text}>Or</div>
                    </div>
                </Box>
                <Box marginY={2}>
                    <button type="button" className={styles.googleSignin}>
                        <span className={styles.icon}>
                            <IconGoogle size={24} />
                        </span>
                        <span className={styles.text}>
                            Continue with Google
                        </span>
                    </button>
                </Box>
                <Box marginY={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <span className={styles.callToSignup}>New to Wobb ?</span>
                    <Link to={Routes.Signup} className={styles.signupLink}>Sign up</Link>
                </Box>
            </form>
        </div>
    </div>
}