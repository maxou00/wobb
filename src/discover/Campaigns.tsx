import { DataStore } from "@aws-amplify/datastore";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { padZero } from "../core/utils";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";
import { CampaignStatus } from "../models";
import { Campaign } from "../models";
import { useAppUser } from "../state/selectors";
import { CampaignFilter } from "./CampaignFilter";
import { CampaignList } from "./CampaignList";

export function Campaigns() {

    const [busy, setBusy] = useState(false);
    const { user } = useAppUser();
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [page, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(25);

    const appendCurrentPage = useCallback(() => {
        setBusy(true);
        DataStore.query(Campaign, (c) => {
            return c.CampaignStatus("eq", CampaignStatus.PUBLISHED)
            .uid("ne", user.sub); //skip user content.
        }, {
            page, limit
        })
            .then((sets) => {
                setBusy(false);
                setCampaigns([...campaigns, ...sets]);
            })
    }, [campaigns, limit, page, user.sub]);

    useEffect(() => {
        appendCurrentPage();
    }, []);

    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Typography variant="h6">{padZero(campaigns.length)} {__tr("campaigns")}</Typography>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <CampaignList campaigns={campaigns} />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Box padding={2}>
                    {
                        campaigns.length === 0 && !busy && <Typography variant="body2">{__tr("noCampaignToShow")}</Typography>
                    }
                </Box>
                {
                    busy && <PropagateLoader size={8} color={CssVariables.colorPrimary} />
                }
            </div>
        </Grid>
        <Grid item xs={3}>
            <Paper elevation={1}>
                <CampaignFilter />
            </Paper>
        </Grid>
    </Grid>
}