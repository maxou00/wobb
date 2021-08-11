import { Box, Container, Grid } from "@material-ui/core";
import { useLocation } from "react-router";
import { AppMetadata } from "../components/AppMetadata";
import { BoxNewCampaign } from "./BoxNewCampaign";
import { BoxRecommendedCampaigns } from "./BoxRecommendedCampaigns";
import { CampaignStatusList } from "./CampaignStatusList.tsx";
import { CampaignsWithApplicants } from "./CampaignsWithApplicants";
import { CampaignsWithDeliverables } from "./CampaignsWithDeliverables";
import { CampaignTabs } from "./CampaignTabs";
import { MainCarousel } from "./MainCarousel";
import styles from "../styles/MyCampaigns.module.scss";
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
            <Box className={styles.contentSurface}>
                <CampaignStatusList filter={filter} onChange={setActiveFilter} />
            </Box>
        </Grid>
        <Grid item xs={12} md={8} lg={6} >
            <Box className={styles.contentSurface}>
                {
                    status && status === "posted" &&
                    <CampaignsWithApplicants />
                }
                {
                    status && status === "applied" &&
                    <CampaignsWithDeliverables />
                }
            </Box>
        </Grid>
        <Grid item md={12} lg={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={12}>
                    <Box className={styles.contentSurface}>
                        <BoxNewCampaign />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                    <Box className={styles.contentSurface}>
                        <BoxRecommendedCampaigns />
                    </Box>
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