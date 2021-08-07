import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/CampaignTabs.module.scss";

export function CampaignTabs() {
    return <div className={styles.campaignTabs}>
        <NavLink to={Routes.campaigns("applied")} className={styles.campaignTab} activeClassName={styles.activeCampaignTab}>
            {__tr("applied")}
        </NavLink>
        <NavLink to={Routes.campaigns("posted")} className={styles.campaignTab} activeClassName={styles.activeCampaignTab}>
            {__tr("posted")}
        </NavLink>
        <Switch>
            <Route path={Routes.BaseCampaigns} exact>
                <Redirect to={Routes.campaigns("applied")}/>
            </Route>
        </Switch>
    </div>
}