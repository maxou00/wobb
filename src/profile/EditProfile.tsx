import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import { StyledTab, StyledTabs } from "../components/custom";
import { __tr } from "../i18n";
import { EditPassword } from "./EditPassword";
import { EditPersonal } from "./EditPersonal";

export function EditProfile() {
    const [activeTab, setActiveTab] = useState(0);

    return <Grid container spacing={2}>
        <Grid item xs={4}>
            <Paper elevation={0}>
                <Box padding={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Typography variant="h6">{__tr("editProfile")}</Typography>
                </Box>
                <Box paddingY={4}>
                    <StyledTabs
                        indicatorColor="primary"
                        textColor="primary"
                        value={activeTab}
                        variant="fullWidth"
                        orientation="vertical"
                        onChange={(ev, val) => setActiveTab(val)}>
                        <StyledTab label={__tr("personalInformation")} />
                        <StyledTab label={__tr("changePassword")} />
                    </StyledTabs>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={8}>
            <Paper elevation={0}>
                {activeTab === 0 && <Box padding={4}>
                    <EditPersonal />
                </Box>}
                {activeTab === 1 && <Box padding={4}>
                    <EditPassword />
                </Box>}
            </Paper>
        </Grid>
    </Grid>
}