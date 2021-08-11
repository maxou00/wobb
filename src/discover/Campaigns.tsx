import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { __tr } from "../i18n";
import { CampaignFilter } from "./CampaignFilter";
import { CampaignList } from "./CampaignList";

export function Campaigns() {
    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Typography variant="h6">219 {__tr("campaigns")}</Typography>
            </Box>
        </Grid>
        <Grid item xs={8}>
            <CampaignList />
        </Grid>
        <Grid item xs={4}>
            <Paper elevation={1}>
                <CampaignFilter />
            </Paper>
        </Grid>
    </Grid>
}