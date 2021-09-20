import { Box, Grid, Paper } from "@material-ui/core";
import { useCallback } from "react";
import { AppMetadata } from "../components/AppMetadata";
import { ApplyCampaign } from "./ApplyCampaign";
import { BoxRecommendedCampaigns } from "./BoxRecommendedCampaigns";
import { CampaignDetails } from "./CampaignDetails";
import { useCampaignContext } from "./ViewCampaign";

export function SingleCampaign() {
    
    const { campaign } = useCampaignContext();

    const onApplyCampaign = useCallback(() => {

    }, []);

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
                            <ApplyCampaign onApply={() => {}} />
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