import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { EditProfile } from "./EditProfile";
import { LinkedAccounts } from "./LinkedAccounts";
import { ProfileHome } from "./ProfileHome";
import { UserRatingStats } from "./UserRatingStats";

export function ProfileScreen() {
    return <Box paddingY={2}>
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Switch>
                    <Route path={Routes.EditProfile}>
                        <EditProfile/>
                    </Route>
                    <Route path={Routes.MyProfile} exact>
                        <ProfileHome/>
                    </Route>
                </Switch>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Box paddingX={4} paddingY={2}>
                                <Box height="56px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="body1" style={{ fontWeight: 500, textTransform: 'uppercase' }}>{__tr("yourProgress")}</Typography>
                                </Box>
                                <Divider />
                                <Box marginTop={2}>
                                    <UserRatingStats />
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Box paddingX={4} paddingY={2}>
                                <Box height="56px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="body1" style={{ fontWeight: 500, textTransform: 'uppercase' }}>{__tr("yourProgress")}</Typography>
                                </Box>
                                <Divider />
                                <Box marginTop={2}>
                                    <LinkedAccounts />
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}