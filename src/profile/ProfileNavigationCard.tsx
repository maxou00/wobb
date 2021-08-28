import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Stars } from "../components/Stars";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { setCurrentUser } from "../state/action-creators";
import { useAppUser } from "../state/selectors";
import styles from "../styles/ProfileCard.module.scss";

const RoundedButton = withStyles({
    root: {
        borderRadius: 32
    }
})(Button);

export function ProfileNavigationCard() {
    const [askingSignOut, setAskingSignout] = useState(false);
    const { user } = useAppUser();
    const history = useHistory();
    const dispatch = useDispatch();

    const viewProfile = useCallback(() => {
        history.push(Routes.MyProfile);
    }, [history]);

    const onSignOut = useCallback(async () => {
        setAskingSignout(false);
        await Auth.signOut();
        /// unset the user in app state.
        dispatch(setCurrentUser(undefined));
        history.replace(Routes.Base);
    }, [history, dispatch]);

    if (!user) {
        return <></>
    }
    return <Box padding={1} className={styles.page}>
        <Box padding={2} className={styles.profile}>
            <div className={styles.image}></div>
            <div className={styles.content}>
                <Typography variant="h6" className={styles.name}>{user.name}</Typography>
                <Typography variant="body2" className={styles.sub}>Influencer <Stars count={4.1} /> (125)</Typography>
            </div>
        </Box>
        <Box padding={2} className={styles.buttons}>
            <RoundedButton onClick={viewProfile} variant="outlined" color="primary" fullWidth>{__tr("viewProfile")}</RoundedButton>
        </Box>
        <Box padding={1} className={styles.navigation}>
            <NavLink to={Routes.MyEarnings} className={styles.navItem} activeClassName={styles.navItemActive}>{__tr("myEarnings")}</NavLink>
            <NavLink to={Routes.MyOrders} className={styles.navItem} activeClassName={styles.navItemActive}>{__tr("myOrders")}</NavLink>
            <NavLink to={Routes.Affiliate} className={styles.navItem} activeClassName={styles.navItemActive}>{__tr("referAndEarn")}</NavLink>
            <NavLink to={Routes.UserManagement} className={styles.navItem} activeClassName={styles.navItemActive}>{__tr("userManagement")}</NavLink>
            <NavLink to={Routes.PrivacyPolicies} className={styles.navItem} activeClassName={styles.navItemActive}>{__tr("privacyPolicy")}</NavLink>
            <NavLink to={Routes.HelpAndSupport} className={styles.navItem} activeClassName={styles.navItemActive}>{__tr("helpAndSupport")}</NavLink>
            <span role="button" className={styles.navItem} onClick={() => setAskingSignout(true)}>{__tr("signOut")}</span>
        </Box>
        <Dialog open={askingSignOut} onClose={() => setAskingSignout(false)} maxWidth="sm" fullWidth>
            <DialogTitle>Exit</DialogTitle>
            <DialogContent>
                <DialogContentText>Please confirm again to exit.</DialogContentText>
            </DialogContent>
            <DialogActions>
                <TextTransformNoneButton variant="outlined" color="primary" onClick={() => setAskingSignout(false)}>Cancel</TextTransformNoneButton>
                <TextTransformNoneButton variant="contained" color="primary" onClick={onSignOut}>Yes, exit</TextTransformNoneButton>
            </DialogActions>
        </Dialog>
    </Box>
}