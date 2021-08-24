import { Box, Container, Grid, Paper } from "@material-ui/core";
import { useLocation } from "react-router";
import { AppMetadata } from "../components/AppMetadata";
import { BoxNewCampaign } from "./BoxNewCampaign";
import { BoxRecommendedCampaigns } from "./BoxRecommendedCampaigns";
import { CampaignStatusList } from "./CampaignStatusList.tsx";
import { CampaignsWithApplicants } from "./CampaignsWithApplicants";
import { CampaignsWithDeliverables } from "./CampaignsWithDeliverables";
import { CampaignTabs } from "./CampaignTabs";
import { MainCarousel } from "./MainCarousel";
import { useState } from "react";
import { CampaignFilters } from "../core";
import qs from "querystring";
import { useMemo } from "react";

export function MyCampaigns() {
    const [filter, setActiveFilter] = useState(CampaignFilters[0]);
    const location = useLocation()
    const status = useMemo(() => qs.parse(location.search.replace("?", "")).filter || "applied", [location]);

    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Container>
                <Box paddingTop={4} paddingBottom={2}>
                    <MainCarousel />
                </Box>
            </Container>
        </Grid>
        <Grid item xs={12}>
            <Box paddingY={2}>
                <Container>
                    <CampaignTabs />
                </Container>
            </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
            <Paper elevation={0}>
                <CampaignStatusList filter={filter} onChange={setActiveFilter} />
            </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={6} >
            <Paper elevation={0}>
                {
                    status && status === "posted" &&
                    <CampaignsWithApplicants />
                }
                {
                    status && status === "applied" &&
                    <CampaignsWithDeliverables />
                }
            </Paper>
        </Grid>
        <Grid item md={12} lg={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={12}>
                    <Paper elevation={0}>
                        <BoxNewCampaign />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                    <Paper elevation={0}>
                        <BoxRecommendedCampaigns />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <AppMetadata />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}