import { Box, Checkbox, Grid, Paper, TableContainer, withStyles } from "@material-ui/core";
import { ApplicantsFilter } from "./ApplicantsFilter";
import { AppMetadata } from "../components/AppMetadata";
import { ApplicantsTable } from "./ApplicantsTable";
import { useUrlQuery } from "../core/hooks";
import { __tr } from "../i18n";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { OrderInfluencerSummary } from "./OrderInfluencerSummary";
import { useCallback, useMemo } from "react";
import { SendMessageToApplicants } from "../messaging/MessageToApplicantsDialog";
import { useState } from "react";
import { ShareBriefDialog } from "../messaging/ShareBriefDialog";
import { MarkCampaignAsCompleteDialog } from "./MarkCampaignAsCompleteDialog";
import { CampaignStatusNavigation } from "./CampaignStatusNavigation";
import { DeliverableList } from "./Deliverables";
import { ApplicantFilter } from "./ApplicantsFilterTab";
import { JobStatus } from "../models";
import { useProvidedApplicants } from "../state/ProvidedApplicantsContext";
import { padZero } from "../core/utils";

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
    const { applicants, selected, selectApplicants, unselectApplicants } = useProvidedApplicants();
    const [sendingMessage, setSendingMessage] = useState(false);
    const [sharingBrief, setSharingBrief] = useState(false);
    const [markAsComplete, setMarkAsComplete] = useState(false);

    const filter = useUrlQuery("filter", "applied");
    const status = useUrlQuery("status", "all");

    const filteredApplicants = useMemo(() => {
        return applicants.filter((ap) => {
            let status = ap.status
            switch (filter) {
                case "applied": {
                    return !Boolean(status)
                }
                case ApplicantFilter.received: {
                    return !Boolean(status)
                }
                case ApplicantFilter.shortlisted: {
                    return status === JobStatus.SHORT_LISTED
                }
                case ApplicantFilter.hired: {
                    return status === JobStatus.HIRED || status === JobStatus.COMPLETED || status === JobStatus.ONGOING
                }
                case ApplicantFilter.rejected: {
                    return status === JobStatus.REJECTED
                }
                default:
                    return true;
            }
        })
    }, [applicants, filter])

    const hasSelectedAll = useMemo(() => {
        return filteredApplicants.every((item) => {
            return Boolean( selected.find((j) => j.id === item.id) )
        })
    }, [selected, filteredApplicants]);

    const selectOrUnselectAll = useCallback((ev, check: any) => {
        if (check) {
            selectApplicants(...filteredApplicants)
        }
        else {
            unselectApplicants(...filteredApplicants)
        }
    }, [filteredApplicants, selectApplicants, unselectApplicants]);

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
                {
                    filteredApplicants.length > 0 && <>
                        <Box paddingRight={2}>
                            <div>
                                <Checkbox checked={hasSelectedAll} onChange={selectOrUnselectAll} />
                                <span>{__tr("selectAll")} ({padZero(filteredApplicants.length)})</span>
                            </div>
                        </Box>
                        <Box paddingX={.5}>
                            <WhiteButton disableElevation variant="contained">{__tr("export")}</WhiteButton>
                        </Box>
                        {
                            filter === ApplicantFilter.shortlisted &&
                            <Box paddingX={.5}>
                                <WhiteButton disableElevation variant="contained">{__tr("reject")}</WhiteButton>
                            </Box>
                        }
                        {
                            filter === ApplicantFilter.hired && selected.length > 0 && <>
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
                    </>
                }
            </Box>
        </Grid>
        <Grid item xs={8}>
            <Paper elevation={0}>
                {
                    filter === ApplicantFilter.hired && status !== "all" &&
                    <DeliverableList applicants={filteredApplicants} />
                }
                {
                    (filter !== ApplicantFilter.hired || status === "all") &&
                    <TableContainer>
                        <ApplicantsTable applicants={filteredApplicants} filter={filter} />
                    </TableContainer>
                }
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {[ApplicantFilter.received, ApplicantFilter.rejected, ApplicantFilter.invited].includes(filter as ApplicantFilter) && <Paper elevation={0}>
                        <ApplicantsFilter />
                    </Paper>}
                    {
                        ///Removed composition
                        /*{ filter === ApplicantFilter.hired && <Paper elevation={0}>
                            <DeliverableDashboard />
                        </Paper> }*/
                    }
                    {filter === ApplicantFilter.shortlisted && filteredApplicants.length > 0 && <Paper elevation={0}>
                        <OrderInfluencerSummary />
                    </Paper>}
                    {filter === ApplicantFilter.hired && <Paper elevation={0}>
                        <CampaignStatusNavigation />
                    </Paper>}
                </Grid>
                <Grid item xs={12}>
                    <AppMetadata />
                </Grid>
            </Grid>
        </Grid>
        <SendMessageToApplicants
            open={sendingMessage}
            onClose={() => setSendingMessage(false)}
            maxWidth="md"
            fullWidth />
        <ShareBriefDialog
            open={sharingBrief}
            onClose={() => setSharingBrief(false)}
            maxWidth="md"
            fullWidth />
        <MarkCampaignAsCompleteDialog
            open={markAsComplete}
            onClose={() => setMarkAsComplete(false)}
            maxWidth="md"
            fullWidth />
    </Grid>

}