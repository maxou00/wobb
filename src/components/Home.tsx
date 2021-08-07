import { TopAppBar } from "./TopAppBar";
import { UserPool } from "../core/constants";
import { useMemo } from "react";
import styles from "../styles/Home.module.scss";
import { Box, Container } from "@material-ui/core";
import { MyCampaigns } from "../campaigns/MyCampaigns";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../routes";

export function Home() {
    const user = useMemo(() => UserPool.getCurrentUser(), []);

    return <div className={styles.page}>
        <div className={styles.header}>
            <TopAppBar />
        </div>
        <Box padding={8} className={styles.main}>
            <Switch>
                <Route path={Routes.MyCampaigns}>
                    <Container>
                        <MyCampaigns />
                    </Container>
                </Route>
                <Route path={Routes.Home} exact>
                    <Redirect to={Routes.campaigns("applied")} />
                </Route>
            </Switch>
        </Box>
    </div>
}

