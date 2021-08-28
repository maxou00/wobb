import { Drawer, Hidden, IconButton, InputBase, Popover } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/TopAppBar.module.scss";
import { IconBrowse, IconChat, IconHeart, IconMegaphone, IconSearch } from "./Icons";
import { Logo } from "./Logo";
import { MdPeople, MdArrowDropDown, MdMenu, MdPerson } from "react-icons/md";
import { useState } from "react";
import { ProfileNavigationCard } from "../profile/ProfileNavigationCard";

export function TopAppBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [profileNavigationAnchor, setProfileNavigationAnchor] = useState<HTMLButtonElement>();

    return <div className={styles.toolbar}>
        <div className={styles.logoWrapper}>
            <Hidden mdUp>
                <IconButton className={styles.menuBtn} onClick={() => setDrawerOpen(true)}>
                    <MdMenu size={24} />
                </IconButton>
            </Hidden>
            <Logo size={72} />
        </div>
        <div className={styles.actions}>
            <InputBase
                placeholder={__tr("searchSomething")}
                startAdornment={<IconSearch size={24} />}
                className={styles.searchInput} />
            <Hidden smDown>
                <nav className={styles.navigation}>
                    <NavLink to={Routes.Discover} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                        <div className={styles.icon}>
                            <IconBrowse size={24} />
                        </div>
                        <span className={styles.title}>{__tr("discover")}</span>
                    </NavLink>
                    <NavLink to={Routes.BaseCampaigns} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                        <div className={styles.icon}>
                            <IconMegaphone size={24} />
                        </div>
                        <span className={styles.title}>{__tr("myCampaigns")}</span>
                    </NavLink>
                    <NavLink to={Routes.Messages} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                        <div className={styles.icon}>
                            <IconChat size={24} />
                        </div>
                        <span className={styles.title}>{__tr("messages")}</span>
                    </NavLink>
                    <NavLink to={Routes.Notifications} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                        <div className={styles.icon}>
                            <IconHeart size={24} />
                        </div>
                        <span className={styles.title}>{__tr("notifications")}</span>
                    </NavLink>
                    <button className={styles.me} onClick={(ev) => setProfileNavigationAnchor(ev.currentTarget)}>
                        <div className={styles.picture}>
                            <MdPerson size={24} />
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.title}>{__tr("me")}</span>
                            <MdArrowDropDown size={24} />
                        </div>
                    </button>
                    <Popover elevation={2} anchorOrigin={{vertical:"bottom", horizontal: "center"}} open={Boolean(profileNavigationAnchor)} anchorEl={profileNavigationAnchor} onClose={() => setProfileNavigationAnchor(undefined)}>
                        <ProfileNavigationCard/>
                    </Popover>
                </nav>
            </Hidden>
        </div>
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <div className={styles.drawer_menu}>
                <nav className={styles.navigation}>
                    <NavLink to={Routes.Discover} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                        <div className={styles.icon}>
                            <IconBrowse size={24} />
                        </div>
                        <span className={styles.title}>{__tr("discover")}</span>
                    </NavLink>
                    <NavLink to={Routes.BaseCampaigns} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                        <div className={styles.icon}>
                            <IconMegaphone size={24} />
                        </div>
                        <span className={styles.title}>{__tr("myCampaigns")}</span>
                    </NavLink>
                    <NavLink to={Routes.Messages} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                        <div className={styles.icon}>
                            <IconChat size={24} />
                        </div>
                        <span className={styles.title}>{__tr("messages")}</span>
                    </NavLink>
                    <NavLink to={Routes.Notifications} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>
                        <div className={styles.icon}>
                            <IconHeart size={24} />
                        </div>
                        <span className={styles.title}>{__tr("notifications")}</span>
                    </NavLink>
                    <button className={styles.me}>
                        <div className={styles.picture}>
                            <MdPeople size={24} />
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.title}>{__tr("me")}</span>
                            <MdArrowDropDown size={24} />
                        </div>
                    </button>
                </nav>
            </div>
        </Drawer>
    </div>
}