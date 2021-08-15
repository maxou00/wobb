import { Box, Grid, Paper } from "@material-ui/core";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { useUrlQuery } from "../campaigns/hooks";
import { StyledTab, StyledTabs } from "../components/custom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { OrderBillingAddress } from "./orders/OrderBillingAddress";
import { Orders } from "./orders/Orders";

export function OrderScreen() {
    const selectedTab = useUrlQuery("tab", "orders");
    const history = useHistory();

    const setActiveTab = useCallback((tab: string) => {
        history.push(`${Routes.MyOrders}?tab=${tab}`);
    }, [history]);

    return <Grid container spacing={2}>
        <Grid item xs={2}>
            <Paper elevation={0}>
                <Box paddingY={2}>
                    <StyledTabs
                        indicatorColor="primary"
                        textColor="primary"
                        value={selectedTab}
                        variant="fullWidth"
                        orientation="vertical"
                        onChange={(ev, val) => setActiveTab(val)}>
                        <StyledTab label={__tr("myOrders")} value="orders" />
                        <StyledTab label={__tr("billingAddress")} value="billing" />
                    </StyledTabs>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={10}>
            {
                selectedTab === "orders" &&
                <Orders />
            }
            {
                selectedTab === "billing" &&
                <OrderBillingAddress/>
            }
        </Grid>
    </Grid>
}