import { css } from "@emotion/css";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Typography, withStyles } from "@material-ui/core";
import { ReactNode, useCallback } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useHistory } from "react-router";
import { useUrlQuery } from "../campaigns/hooks";
import { CssVariables } from "../css-variables";
import { Routes } from "../routes";

const styles = {
    header: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid ${CssVariables.colorGrayV1};
    `,
    title: css`
        text-transform: uppercase;
        font-weight: 500 !important;
    `,
    deliverableContent: css`
        width: 100%;
    `,
    deliverableSection: css`
        width: 100%;
        padding: 16px 8px;
        display: block;
        border-bottom: 1px solid ${CssVariables.colorGrayV2};
        border: none;
        background: transparent;
        text-transform: uppercase;
        cursor: pointer;

        &[data-active = true] {
            font-weight: 500;
            color: ${CssVariables.colorPrimary};
        }
    `
}

const CustomSummary = withStyles({
    root: {
        '&$expanded': {
            borderLeft: `8px solid ${CssVariables.colorPrimary}`,
        }
    },
    expanded: {}
})(AccordionSummary);

interface SectionTitleProps {
    title: string;
    active: boolean;
    onClick(): any;
}

function SectionTitle(props: SectionTitleProps) {
    return <Box
        component="span"
        data-active={props.active}
        onClick={props.onClick}
        className={styles.deliverableSection}>
        {props.title}
    </Box>
}

export function TaskDeliverables() {

    const deliverable = useUrlQuery("deliverable", "reel");
    const action = useUrlQuery("action", "approval");
    const history = useHistory();

    const handleDeliverableClick = useCallback((deliverableId: string, selectedAction: string = "approval") => {
        history.push(`${Routes.viewCampaignTasks("a-simple-id")}?deliverable=${deliverableId}&action=${selectedAction}`);
    }, [history]);

    return <Box>
        <Box padding={2} className={styles.header}>
            <Typography variant="h6" className={styles.title}>All Deliverables</Typography>
        </Box>
        <Box>
            <Accordion expanded={deliverable === "reel"} elevation={0}>
                <CustomSummary expandIcon={<MdKeyboardArrowDown />} onClick={() => handleDeliverableClick("reel", "approval")}>
                    <Typography variant="body1">1. REEL</Typography>
                </CustomSummary>
                <AccordionDetails style={{ padding: '0' }}>
                    <Box className={styles.deliverableContent}>
                        <SectionTitle
                            title="Content Approval"
                            active={deliverable === 'reel' && action === "approval"}
                            onClick={() => handleDeliverableClick("reel", "approval")} />
                        <Divider />
                        <SectionTitle
                            title="Submit Proof"
                            active={deliverable === 'reel' && action === "submit"}
                            onClick={() => handleDeliverableClick("reel", "submit")} />
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Divider/>
            <Accordion expanded={deliverable === "static-story"} elevation={0}>
                <CustomSummary expandIcon={<MdKeyboardArrowDown />} onClick={() => handleDeliverableClick("static-story", "approval")}>
                    <Typography variant="body1">2. STATIC STORY</Typography>
                </CustomSummary>
                <AccordionDetails style={{ padding: '0' }}>
                    <Box className={styles.deliverableContent}>
                        <SectionTitle
                            title="Content Approval"
                            active={deliverable === 'static-story' && action === "approval"}
                            onClick={() => handleDeliverableClick("static-story", "approval")} />
                        <Divider />
                        <SectionTitle
                            title="Submit Proof"
                            active={deliverable === 'static-story' && action === "submit"}
                            onClick={() => handleDeliverableClick("static-story", "submit")} />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Box>
}