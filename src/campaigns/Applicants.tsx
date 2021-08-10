import { Box, Button, Checkbox, Grid, Paper, TableContainer, withStyles } from "@material-ui/core";
import { ApplicantsFilter } from "./ApplicantsFilter";
import styles from "../styles/MyCampaigns.module.scss";
import { AppMetadata } from "../components/AppMetadata";
import { ApplicantsTable } from "./ApplicantsTable";
import { useUrlParam } from "./hooks";
import { __tr } from "../i18n";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { OrderInfluencerSummary } from "./OrderInfluencerSummary";
import { DeliverableDashboard } from "./DeliverableDashboards";

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
    const filter = useUrlParam("filter", "applied");

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
                            <WhiteButton disableElevation variant="contained">{__tr("message")}</WhiteButton>
                        </Box>
                        <Box paddingX={.5}>
                            <WhiteButton disableElevation variant="contained">{__tr("addOrUpdateBrief")}</WhiteButton>
                        </Box>
                        <Box paddingX={.5}>
                            <WhiteButton disableElevation variant="contained">{__tr("raiseDispute")}</WhiteButton>
                        </Box>
                        <Box paddingX={.5}>
                            <WhiteButton disableElevation variant="contained">{__tr("markComplete")}</WhiteButton>
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
    </Grid>

}