import { Box } from "@material-ui/core";
import { CognitoUser } from "amazon-cognito-identity-js";
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { EmailOrPhone } from "../components/EmailOrPhone";
import { IconGoogle } from "../components/Icons";
import { Loader } from "../components/Loader";
import { SingleLineInput } from "../components/SingleLineInput";
import { useUrlQuery } from "../core/hooks";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { IAppState } from "../state";
import { initializeState } from "../state/middlewares";
import { Auth } from "aws-amplify";

import styles from "../styles/Login.module.scss";
import { useEffect } from "react";

const mapState = (state: IAppState) => {
    return {
        user: state.userState.user
    };
}

const mapDispatch = (dispatch: ThunkDispatch<IAppState, {}, AnyAction>) => {
    return {
        initialize: () => dispatch(initializeState()),
    }
}

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>

function Login(props: Props) {
    const [loading, setLoading] = useState(false);
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [errors, setErrors] = useState<any>({});

    const history = useHistory();
    const nextSegment = useUrlQuery("next", "");

    const onSubmit = useCallback(async (ev: React.ChangeEvent<HTMLFormElement>) => {
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

        if (Object.keys(errs).length > 0) {
            return;
        }

        setLoading(true);

        Auth.signIn(emailOrPhone, data.password)
            .then((user: CognitoUser) => {
                user.setDeviceStatusRemembered({
                    onSuccess: () => {
                        setLoading(false);
                        props.initialize()
                            .then((done) => {
                                if (done) {
                                    if (nextSegment) {
                                        let next = decodeURIComponent(nextSegment);
                                        return history.replace(next);
                                    }
                                    return history.replace(Routes.Home);
                                }
                            })
                    },
                    onFailure: (err) => {
                        setLoading(false);
                        toast.error(err.message);
                     }
                });
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message)
            })

    }, [emailOrPhone, history, nextSegment, props]);

    useEffect(() => {
        if(props.user) {
            history.replace(Routes.Discover);
        }
    }, [history,props]);

    return <div className={styles.loginWrapper}>
        <h3>Welcome back !</h3>
        <div className={styles.formWrapper}>
            <h3>Signin</h3>
            <form action="" className={styles.form} onSubmit={onSubmit}>
                {loading && <Loader />}
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

export default connect(mapState, mapDispatch)(Login);