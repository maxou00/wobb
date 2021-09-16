import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { SocialIcon } from "react-social-icons";
import { CampaignReview } from "../campaigns/CampaignReview";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { instagramUrlWithId, youtubeUrlWithId } from "../core/constants";
import { __tr } from "../i18n";
import { Platform } from "../models";
import { Routes } from "../routes";
import { useAppUser } from "../state/selectors";
import { AboutUser } from "./AboutUser";
import { UserResumeCard } from "./UserResumeCard";

export function ProfileHome() {
    const { user, profile } = useAppUser();
    const [linkAccountOpen, setLinkAccountOpen] = useState(false);
    const history = useHistory();

    const handleEditProfile = useCallback(() => {
        history.push(Routes.EditProfile);
    }, [history]);

    const onLinkAccount = useCallback(async(network: Platform) => {
        setLinkAccountOpen(false);
        let windowFeatures = "menubar=no,location=no,resizable=no";
        if(network === Platform.INSTAGRAM) {
            ///process instagram
            window.open(instagramUrlWithId(user.sub), "INSTA_WindowName",windowFeatures);
        }
        else if(network === Platform.YOUTUBE) {
            ///process youtube
            fetch(youtubeUrlWithId(user.sub))
            .then((rs) => rs.json())
            .then((data) => {
                if(data.url) {
                    window.open(data.url, "YTB_WindowName", windowFeatures);
                }
            })
        }
    }, [user]);

    return <Grid container spacing={2}>
        <Grid item xs={4}>
            <Paper elevation={0}>
                <Box paddingY={2} width="100%">
                    {profile && <UserResumeCard profile={profile} />}
                </Box>
                <Box paddingX={2} paddingY={1} width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Box marginRight={1}>
                        <TextTransformNoneButton onClick={handleEditProfile} variant="outlined" color="primary">{__tr("editProfile")}</TextTransformNoneButton>
                    </Box>
                    <Box marginRight={1}>
                        <TextTransformNoneButton variant="outlined" color="primary" onClick={() => setLinkAccountOpen(true)}>{__tr("addAccount")}</TextTransformNoneButton>
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
        <Dialog maxWidth="sm" fullWidth open={linkAccountOpen} onClose={() => setLinkAccountOpen(false)}>
            <DialogTitle>Choose platform</DialogTitle>
            <DialogContent>
                <List dense disablePadding>
                    <ListItem button onClick={ () => onLinkAccount(Platform.INSTAGRAM) }>
                        <ListItemIcon>
                            <SocialIcon network="instagram" style={{width: '28px', height: '28px'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Instagram"/>
                    </ListItem>
                    <ListItem button onClick={ () => onLinkAccount(Platform.YOUTUBE) }>
                        <ListItemIcon>
                            <SocialIcon network="youtube" style={{width: '28px', height: '28px'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Youtube" />
                    </ListItem>
                </List>
            </DialogContent>
            <DialogActions>
                <TextTransformNoneButton
                    variant="outlined"
                    color="default"
                    onClick={() => setLinkAccountOpen(false)}>
                    Cancel
                </TextTransformNoneButton>
            </DialogActions>
        </Dialog>
    </Grid>
}