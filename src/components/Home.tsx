import { TopAppBar } from "./TopAppBar";
import styles from "../styles/Home.module.scss";
import { Box } from "@material-ui/core";
import { MyCampaigns } from "../campaigns/MyCampaigns";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../routes";
import { ViewCampaign } from "../campaigns/ViewCampaign";
import { DiscoverScreen } from "../discover";
import { ProfileScreen } from "../profile/ProfileScreen";
import { NotificationScreen } from "../notifications/NotificationScreen";
import { FixedMargin } from "./FixedMargin";
import { FinanceScreen } from "../finance/FinanceScreen";
import { UserManagementView } from "../user-management/UserManagementView";
import { ReferAndEarnView } from "../refer-earn/ReferAndEarnView";

export function Home() {
    return <div className={styles.page}>
        <div className={styles.header}>
            <TopAppBar />
        </div>
        <Box padding={1} className={styles.main}>
            <FixedMargin>
                <Switch>
                    <Route path={Routes.viewCampaign(":id")}>
                        <ViewCampaign />
                    </Route>
                    <Route path={Routes.BaseCampaigns} exact>
                        <MyCampaigns />
                    </Route>
                    <Route path={Routes.Discover}>
                        <DiscoverScreen />
                    </Route>
                    <Route path={Routes.Finance}>
                        <FinanceScreen />
                    </Route>
                    <Route path={Routes.MyProfile}>
                        <ProfileScreen />
                    </Route>
                    <Route path={Routes.Notifications}>
                        <NotificationScreen />
                    </Route>
                    <Route path={Routes.UserManagement}>
                        <UserManagementView />
                    </Route>
                    <Route path={Routes.Affiliate}>
                        <ReferAndEarnView />
                    </Route>
                    <Route path={Routes.Home} exact>
                        <Redirect to={Routes.campaigns("applied")} />
                    </Route>
                </Switch>
            </FixedMargin>
        </Box>
    </div>
}

