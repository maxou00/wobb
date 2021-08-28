import { Container } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router";
import { Logo } from "../components/Logo";
import { Routes } from "../routes";
import styles from "../styles/AuthLayout.module.scss";
import { ConfirmOTP } from "./ConfirmOTP";
import { ForgotPassword } from "./ForgotPassword";
import Login from "./Login";
import { Signup } from "./Signup";

export function AuthLayout() {
    return <div className={styles.page}>
        <Container className={styles.routes}>
            <header className={styles.authHeader}>
                <Logo size={128} />
            </header>
            <div className={styles.content}>
                <Switch>
                    <Route path={Routes.Login}>
                        <div className={styles.loginComponent}>
                            <Login />
                        </div>
                    </Route>
                    <Route path={Routes.VerifyOTP}>
                        <div className={styles.loginComponent}>
                            <ConfirmOTP />
                        </div>
                    </Route>
                    <Route path={Routes.Signup} exact>
                        <div className={styles.loginComponent}>
                            <Signup />
                        </div>
                    </Route>
                    <Route path={Routes.ForgotPassword}>
                        <div className={styles.loginComponent}>
                            <ForgotPassword />
                        </div>
                    </Route>
                    <Route path={Routes.Auth}>
                        <Redirect to={Routes.Login} />
                    </Route>
                </Switch>
            </div>
        </Container>
    </div>
}
