import { Box, Divider, Grid, Paper, Tab, Tabs, Typography, withStyles } from "@material-ui/core";
import { useState } from "react";
import { AppMetadata } from "../components/AppMetadata";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";
import { CampaignInvites } from "./CampaignInvites";
import { NotificationComponent } from "./NotificationComponent";

const StyledTabs = withStyles({
    indicator: {
        width: '8px',
        left: 0
    }
})(Tabs)

const StyledTab = withStyles({
    root: {
        textTransform: 'capitalize',
        borderBottom: `1px solid ${CssVariables.colorGrayV1}`,
        '&:last-of-type': {
            borderBottom: 'none',
        }
    },
    label: {
        background: 'red'
    }
})(Tab);

export function NotificationScreen() {
    const [activeTab, setActiveTab] = useState(0);

    return <Box>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Paper elevation={0}>
                    <Box>
                        <StyledTabs
                            indicatorColor="primary"
                            textColor="primary"
                            value={activeTab}
                            variant="fullWidth"
                            orientation="vertical"
                            onChange={(ev, val) => setActiveTab(val)}>
                            <StyledTab label={__tr("notifications")} />
                        </StyledTabs>
                    </Box>
                    <Divider />
                    <Box padding={2}>
                        <Typography variant="body2">{__tr("haveNotifications")}</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={0}>
                    <Box padding={4}>
                        <NotificationComponent />
                        <NotificationComponent />
                        <NotificationComponent />
                        <NotificationComponent />
                        <NotificationComponent />
                        <NotificationComponent />
                        <NotificationComponent />
                        <NotificationComponent />
                        <NotificationComponent />
                        <NotificationComponent />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Box padding={2} style={{ borderBottom: `1px solid ${CssVariables.colorGrayV1}` }}>
                                <Typography variant="body1" style={{ fontWeight: 500, textTransform: 'uppercase' }}>{__tr("campaignInvites")}</Typography>
                            </Box>
                            <Box padding={2}>
                                <CampaignInvites />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <AppMetadata />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}