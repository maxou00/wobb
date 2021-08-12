import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { CampaignReview } from "../campaigns/CampaignReview";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { AboutUser } from "./AboutUser";
import { UserResumeCard } from "./UserResumeCard";

export function ProfileHome() {
    const history = useHistory();

    const handleEditProfile = useCallback(() =>{
        history.push(Routes.EditProfile);
    }, [history]);

    return <Grid container spacing={2}>
        <Grid item xs={4}>
            <Paper elevation={0}>
                <Box paddingY={2} width="100%">
                    <UserResumeCard />
                </Box>
                <Box paddingX={2} paddingY={1} width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Box marginRight={1}>
                        <TextTransformNoneButton onClick={handleEditProfile} variant="outlined" color="primary">{__tr("editProfile")}</TextTransformNoneButton>
                    </Box>
                    <Box marginRight={1}>
                        <TextTransformNoneButton variant="outlined" color="primary">{__tr("addAccount")}</TextTransformNoneButton>
                    </Box>
                </Box>
                <Box paddingX={2} paddingY={2} width="100%">
                    <AboutUser />
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={8}>
            <Paper elevation={0}>
                <Box paddingX={4} paddingY={2}>
                    <Box height="56px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="body1" style={{ fontWeight: 500 }}>23 {__tr("campaignsReviews")}</Typography>
                        <TextTransformNoneButton variant="text" color="primary" endIcon={<ArrowDropDown />}>{__tr("mostRelevant")}</TextTransformNoneButton>
                    </Box>
                    <Divider />
                    <Box marginTop={2}>
                        <CampaignReview />
                        <CampaignReview />
                        <CampaignReview />
                        <CampaignReview />
                        <CampaignReview />
                        <CampaignReview />
                        <CampaignReview />
                    </Box>
                </Box>
            </Paper>
        </Grid>
    </Grid>
}