import { Box, Checkbox, Grid, TableContainer, withStyles } from "@material-ui/core";
import { ApplicantsFilter } from "./ApplicantsFilter";
import styles from "../styles/MyCampaigns.module.scss";
import { AppMetadata } from "../components/AppMetadata";
import { ApplicantsTable } from "./ApplicantsTable";
import { useUrlQuery } from "../core/hooks";
import { __tr } from "../i18n";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { OrderInfluencerSummary } from "./OrderInfluencerSummary";
import { DeliverableDashboard } from "./DeliverableDashboards";
import { useCallback } from "react";
import { SendMessageToApplicants } from "../messaging/MessageToApplicantsDialog";
import { useState } from "react";
import { ShareBriefDialog } from "../messaging/ShareBriefDialog";
import { MarkCampaignAsCompleteDialog } from "./MarkCampaignAsCompleteDialog";

const WhiteButton = withStyles({
    root: {
        background: 'white',

        '&:hover': {
            background: CssVariables.colorPrimary,
            color: 'white'
        }
    }
})(TextTransformNoneButton);

export function Applicants() {
    const [sendingMessage, setSendingMessage] = useState(false);
    const [sharingBrief, setSharingBrief] = useState(false);
    const [markAsComplete, setMarkAsComplete] = useState(false);

    const filter = useUrlQuery("filter", "applied");
    
    const onSendMessage = useCallback(() => {
        setSendingMessage(true);
    }, []);

    const onShareBrief = useCallback(() => {
        setSharingBrief(true);
    }, []);

    const onMarkAsComplete = useCallback(() => {
        setMarkAsComplete(true);
    }, []);

    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box marginLeft={2} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Box paddingRight={2}>
                    <div>
                        <Checkbox />
                        <span>{__tr("selectAll")} (103)</span>
                    </div>
                </Box>
                <Box paddingX={.5}>
                    <WhiteButton disableElevation variant="contained">{__tr("export")}</WhiteButton>
                </Box>
                {
                    filter === "shortlisted" &&
                    <Box paddingX={.5}>
                        <WhiteButton disableElevation variant="contained">{__tr("reject")}</WhiteButton>
                    </Box>
                }
                {
                    filter === "hired" && <>
                        <Box paddingX={.5}>
                            <WhiteButton disableElevation variant="contained" onClick={onSendMessage}>{__tr("message")}</WhiteButton>
                        </Box>
                        <Box paddingX={.5}>
                            <WhiteButton disableElevation variant="contained" onClick={onShareBrief}>{__tr("addOrUpdateBrief")}</WhiteButton>
                        </Box>
                        <Box paddingX={.5}>
                            <WhiteButton disableElevation variant="contained">{__tr("raiseDispute")}</WhiteButton>
                        </Box>
                        <Box paddingX={.5}>
                            <WhiteButton disableElevation variant="contained" onClick={onMarkAsComplete}>{__tr("markComplete")}</WhiteButton>
                        </Box>
                    </>
                }
            </Box>
        </Grid>
        <Grid item xs={8}>
            <Box className={styles.contentSurface}>
                <TableContainer>
                    <ApplicantsTable filter={filter} />
                </TableContainer>
            </Box>
        </Grid>
        <Grid item xs={4}>
            <Box marginBottom={2} className={styles.contentSurface}>
                <ApplicantsFilter />
            </Box>
            <Box marginBottom={2} className={styles.contentSurface}>
                <DeliverableDashboard />
            </Box>
            <Box marginBottom={2} className={styles.contentSurface}>
                <OrderInfluencerSummary />
            </Box>
            <Box marginY={4}>
                <AppMetadata />
            </Box>
        </Grid>
        <SendMessageToApplicants
            open={sendingMessage}
            onClose={() => setSendingMessage(false)}
            maxWidth="md"
            fullWidth/>
        <ShareBriefDialog
            open={sharingBrief}
            onClose={() => setSharingBrief(false)}
            maxWidth="md"
            fullWidth/>
        <MarkCampaignAsCompleteDialog
            open={markAsComplete}
            onClose={() => setMarkAsComplete(false)}
            maxWidth="md"
            fullWidth/>
    </Grid>

}