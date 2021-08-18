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
import { ThreadsView } from "../messaging/ThreadsView";

export function Home() {
    return <div className={styles.page}>
        <div className={styles.header}>
            <TopAppBar />
        </div>
        <Box className={styles.main}>
            <Switch>
                <Route path={Routes.viewCampaign(":id")}>
                    <FixedMargin>
                        <ViewCampaign />
                    </FixedMargin>
                </Route>
                <Route path={Routes.BaseCampaigns} exact>
                    <FixedMargin>
                        <MyCampaigns />
                    </FixedMargin>
                </Route>
                <Route path={Routes.Discover}>
                    <FixedMargin>
                        <DiscoverScreen />
                    </FixedMargin>
                </Route>
                <Route path={Routes.Finance}>
                    <FixedMargin>
                        <FinanceScreen />
                    </FixedMargin>
                </Route>
                <Route path={Routes.MyProfile}>
                    <FixedMargin>
                        <ProfileScreen />
                    </FixedMargin>
                </Route>
                <Route path={Routes.Notifications}>
                    <FixedMargin>
                        <NotificationScreen />
                    </FixedMargin>
                </Route>
                <Route path={Routes.UserManagement}>
                    <FixedMargin>
                        <UserManagementView />
                    </FixedMargin>
                </Route>
                <Route path={Routes.Affiliate}>
                    <FixedMargin>
                        <ReferAndEarnView />
                    </FixedMargin>
                </Route>
                <Route path={Routes.Messages}>
                    <ThreadsView />
                </Route>
                <Route path={Routes.Home} exact>
                    <Redirect to={Routes.campaigns("applied")} />
                </Route>
            </Switch>
        </Box>
    </div >
}

