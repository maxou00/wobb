import { Box, Grid, Paper } from "@material-ui/core";
import { useEffect, useMemo } from "react";
import { AppMetadata } from "../components/AppMetadata";
import { useAppUser, useSingleJob } from "../state/selectors";
import { ApplyCampaign } from "./ApplyCampaign";
import { BoxRecommendedCampaigns } from "./BoxRecommendedCampaigns";
import { CampaignDetails } from "./CampaignDetails";
import { useProvidedCampaign } from "./ViewCampaign";
import { WithApplyCampaign, WithApplyCampaignProps } from "./WithApplyCampaign";


function BaseSingleCampaign(props: WithApplyCampaignProps) {
    const { campaign } = useProvidedCampaign();
    const job = useSingleJob(campaign.id);

    const canApply = useMemo(() => {
        return props.canApply
    }, [props]);

    return <Grid container spacing={2}>
        <Grid item xs={9}>
            <Paper elevation={0}>
                <CampaignDetails />
            </Paper>
        </Grid>
        <Grid item xs={3}>
            <Box>
                <Grid container spacing={2}>
                    {canApply && <Grid item xs={12}>
                        <Paper elevation={0}>
                            <ApplyCampaign />
                        </Paper>
                    </Grid>}
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <BoxRecommendedCampaigns />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <AppMetadata />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
}

export const SingleCampaign = WithApplyCampaign<{}>(BaseSingleCampaign);