import { Box, Container, Grid } from "@material-ui/core";
import { useUrlQuery } from "../core/hooks";
import { MainCarousel } from "../campaigns/MainCarousel";
import { Campaigns } from "./Campaigns";
import { DiscoverTab } from "./DiscoverTab";
import { Influencers } from "./Influencers";

export function DiscoverScreen() {
    const filter = useUrlQuery("filter", "campaigns");

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
                <DiscoverTab />
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Box paddingY={2} paddingX={4}>
                {
                    filter === "campaigns" &&
                    <Campaigns />
                }
                {
                    filter === "influencers" &&
                    <Influencers />
                }
            </Box>
        </Grid>
    </Grid>
}