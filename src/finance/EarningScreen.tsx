import { Box, Grid, Paper } from "@material-ui/core";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { useUrlQuery } from "../core/hooks";
import { StyledTab, StyledTabs } from "../components/custom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { BillingAndShippingAddress } from "./earnings/BillingAndShippingAddress";
import { Earnings } from "./earnings/Earnings";

export function EarningScreen() {
    const selectedTab = useUrlQuery("tab", "earnings");
    const history = useHistory();

    const setActiveTab = useCallback((tab: string) => {
        history.push(`${Routes.MyEarnings}?tab=${tab}`);
    }, [history]);

    return <Grid container spacing={2}>
        <Grid item xs={12} lg={2}>
            <Paper elevation={0}>
                <Box paddingY={2}>
                    <StyledTabs
                        indicatorColor="primary"
                        textColor="primary"
                        value={selectedTab}
                        variant="fullWidth"
                        orientation="vertical"
                        onChange={(ev, val) => setActiveTab(val)}>
                        <StyledTab label={__tr("myEarnings")} value="earnings" />
                        <StyledTab label={__tr("billingAndShippingAddress")} value="billing" />
                    </StyledTabs>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={12} lg={10}>
            {
                selectedTab === "earnings" &&
                <Earnings />
            }
            {
                selectedTab === "billing" &&
                <BillingAndShippingAddress />
            }
        </Grid>
    </Grid>
}