import { Box, Grid, Paper } from "@material-ui/core";
import { AppMetadata } from "../components/AppMetadata";
import { ApplyCampaign } from "./ApplyCampaign";
import { BoxRecommendedCampaigns } from "./BoxRecommendedCampaigns";
import { CampaignDetails } from "./CampaignDetails";

export function SingleCampaign() {
    return <Grid container spacing={2}>
        <Grid item xs={9}>
            <Paper elevation={0}>
                <CampaignDetails />
            </Paper>
        </Grid>
        <Grid item xs={3}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <ApplyCampaign />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <BoxRecommendedCampaigns />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <AppMetadata/>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
}