import { InputBase, Toolbar, Typography } from "@material-ui/core";
import { NotificationImportant, Search } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import styles from "../styles/TopAppBar.module.scss";

export function TopAppBar() {
    return <Toolbar className={styles.toolbar}>
        <div className={styles.titleWrapper}>
            <Typography variant="h5" className={styles.title}>Wobb.ai</Typography>
        </div>
        <div className={styles.actions}>
            <InputBase
                placeholder="Search"
                startAdornment={<Search fontSize="small" />}
                className={styles.searchInput} />
            <nav className={styles.navigation}>
                <NavLink to="/my-campaigns" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                    <div className={styles.icon}>
                        <NotificationImportant />
                    </div>
                    <span className={styles.title}>My Campaigns</span>
                </NavLink>
                <NavLink to="/influencers" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                    <div className={styles.icon}>
                        <NotificationImportant />
                    </div>
                    <span className={styles.title}>Browse Influencers</span>
                </NavLink>
                <NavLink to="/influencers" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                    <div className={styles.icon}>
                        <NotificationImportant />
                    </div>
                    <span className={styles.title}>Messages</span>
                </NavLink>
                <NavLink to="/notifications" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                    <div className={styles.icon}>
                        <NotificationImportant />
                    </div>
                    <span className={styles.title}>Notifications</span>
                </NavLink>
                <NavLink to="/profile/me" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                    <div className={styles.icon}>
                        <NotificationImportant />
                    </div>
                    <span className={styles.title}>Profile</span>
                </NavLink>
            </nav>
        </div>
    </Toolbar>
}