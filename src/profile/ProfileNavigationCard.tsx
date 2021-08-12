import { Box, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useCallback } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Stars } from "../components/Stars";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/ProfileCard.module.scss";

const RoundedButton = withStyles({
    root: {
        borderRadius: 32
    }
})(Button);

export function ProfileNavigationCard() {
    const history = useHistory();

    const viewProfile = useCallback(() => {
        history.push(Routes.MyProfile);
    }, [history]);

    return <Box padding={1} className={styles.page}>
        <Box padding={2} className={styles.profile}>
            <div className={styles.image}></div>
            <div className={styles.content}>
                <Typography variant="h6" className={styles.name}>Lara Dennis</Typography>
                <Typography variant="body2" className={styles.sub}>Influencer <Stars count={4.1}/> (125)</Typography>
            </div>
        </Box>
        <Box padding={2}  className={styles.buttons}>
            <RoundedButton onClick={viewProfile} variant="outlined" color="primary" fullWidth>{__tr("viewProfile")}</RoundedButton>
        </Box>
        <Box padding={1} className={styles.navigation}>
            <NavLink to={Routes.MyProfile} className={styles.navItem} activeClassName={styles.navItemActive}>My earnings</NavLink>
            <NavLink to={Routes.MyEarnings} className={styles.navItem} activeClassName={styles.navItemActive}>My Orders</NavLink>
            <NavLink to={Routes.Affiliate} className={styles.navItem} activeClassName={styles.navItemActive}>Refer & earn</NavLink>
            <NavLink to={Routes.PrivacyPolicies} className={styles.navItem} activeClassName={styles.navItemActive}>Privay Policy</NavLink>
            <NavLink to={Routes.HelpAndSupport} className={styles.navItem} activeClassName={styles.navItemActive}>Help & Support</NavLink>
            <NavLink to={Routes.SignOut} className={styles.navItem} activeClassName={styles.navItemActive}>Sign Out</NavLink>
        </Box>
    </Box>
}