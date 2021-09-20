import { css } from "@emotion/css";
import { Box, Typography } from "@material-ui/core";
import { MdDone } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { Campaign } from "../models";

const styles = {
    header: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 1px solid ${CssVariables.colorGrayV1};
    `,
    applyIcon: css`
        border: 2px solid ${CssVariables.colorGrayV3};
        width: 28px;
        height: 28px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 24px;
    `,
    title: css`
        text-transform: uppercase;
        margin-left: 8px !important;
    `
}

export function ApplyCampaign(props: { onApply():any }) {
    return <Box>
        <Box padding={2} className={styles.header}>
            <Box className={styles.applyIcon}>
                <MdDone size={16}/>
            </Box>
            <Typography variant="h6" className={styles.title}>Apply Now</Typography>
        </Box>
        <Box padding={2}>
            <Typography variant="body2">
                Right campaign for you?
                Apply earliest and increase your chances of getting hired.
            </Typography>
            <Box marginY={2}>
                <TextTransformNoneButton onClick={props.onApply} variant="outlined" color="primary" size="large" fullWidth>
                    Apply Now
                </TextTransformNoneButton>
            </Box>
        </Box>
    </Box>
}