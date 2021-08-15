import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { BoxRecommendedCampaigns } from "../../campaigns/BoxRecommendedCampaigns";
import { __tr } from "../../i18n";
import { EditBillingAddress } from "./EditBillingAddress";

export function BillingAndShippingAddress() {

    return <Grid container spacing={2}>
        <Grid item xs={8}>
            <Paper elevation={0}>
                <Box>
                    <Box padding={2}>
                        <Typography variant="h6" style={{ textTransform: 'uppercase' }}>{__tr("billingAndShippingAddressforMyEarnings")}</Typography>
                    </Box>
                    <Divider />
                    <Box padding={2}>
                        <EditBillingAddress/>
                    </Box>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper elevation={0}>
                <BoxRecommendedCampaigns />
            </Paper>
        </Grid>
    </Grid>
}