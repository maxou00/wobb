import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { __tr } from "../i18n";
import { InfluencerFilter } from "./InfluencerFilter";
import { InfluencerList } from "./InfluencerList";


export function Influencers() {
    return <Box>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Typography variant="h6">219 {__tr("influencers")}</Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <InfluencerList />
            </Grid>
            <Grid item xs={4}>
                <Paper elevation={0}>
                <InfluencerFilter />
                </Paper>
            </Grid>
        </Grid>
    </Box>
}