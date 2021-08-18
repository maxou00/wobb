import { css } from "@emotion/css";
import { Box, Divider, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import { useUrlQuery } from "../core/hooks";
import { CssVariables } from "../css-variables";

const styles = {
    tabs: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    `,
    tab: css`
        width: 100%;
        height: 56px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px 16px;
        border: none;
        border-bottom: 1px solid ${CssVariables.colorGrayV1};
        background: transparent;

        &:last-of-type {
            border-bottom: none;
        }

        &:hover {
            background: ${CssVariables.colorGrayV1};
        }

        &[data-active = true] {
            border-right: 8px solid ${CssVariables.colorPrimary};
            color: ${CssVariables.colorPrimary};
        }
    `
}

export function CampaignStatusNavigation() {
    const status = useUrlQuery("status", "all");
    const history = useHistory();
    const location = useLocation();

    const handleStatusClick = useCallback((status: string) => {
        let params = new URLSearchParams();
        params.append("filter", "hired")
        params.append("status", status);

        history.push(`${location.pathname}?${params.toString()}`);
    }, [history, location]);

    return <Box>
        <Box padding={2}>
            <Typography variant="h6">Campaign Status</Typography>
        </Box>
        <Divider/>
        <Box className={styles.tabs}>
            <Box component="button" className={styles.tab} data-active={status === "all"} onClick={() => handleStatusClick("all")}>
                <Typography variant="body1">ALL</Typography>
                <Typography variant="body1" style={{fontWeight: 500}}>1,028</Typography>
            </Box>
            <Box component="button" className={styles.tab} data-active={status === "content_pending"} onClick={() => handleStatusClick("content_pending")}>
                <Typography variant="body1">CONTENT PENDING</Typography>
                <Typography variant="body1" style={{fontWeight: 500}}>1,028</Typography>
            </Box>
            <Box component="button" className={styles.tab} data-active={status === "content_approved"} onClick={() => handleStatusClick("content_approved")}>
                <Typography variant="body1">CONTENT APPROVED</Typography>
                <Typography variant="body1" style={{fontWeight: 500}}>1,028</Typography>
            </Box>
            <Box component="button" className={styles.tab} data-active={status === "post_pending"} onClick={() => handleStatusClick("post_pending")}>
                <Typography variant="body1">POST PENDING</Typography>
                <Typography variant="body1" style={{fontWeight: 500}}>1,028</Typography>
            </Box>
            <Box component="button" className={styles.tab} data-active={status === "post_approved"} onClick={() => handleStatusClick("post_approved")}>
                <Typography variant="body1">POST APPROVED</Typography>
                <Typography variant="body1" style={{fontWeight: 500}}>1,028</Typography>
            </Box>
        </Box>
    </Box>
}