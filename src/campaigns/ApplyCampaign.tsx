import { css } from "@emotion/css";
import { Box, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { MdDone } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { __tr, __trParams } from "../i18n";
import { WithApplyCampaign, WithApplyCampaignProps } from "./WithApplyCampaign";

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

function BaseApplyCampaign(props: WithApplyCampaignProps) {

    const onApply = useCallback(() => {
        if(props.canApply) {
            props.apply();
        }
    }, [props]);
    
    return <Box>
        <Box padding={2} className={styles.header}>
            <Box className={styles.applyIcon}>
                <MdDone size={16}/>
            </Box>
            <Typography variant="h6" className={styles.title}>{__tr("applyNow")}</Typography>
        </Box>
        <Box padding={2}>
            <Typography variant="body2">
                {__tr("applyNowText")}
            </Typography>
            <Box marginY={2}>
                <TextTransformNoneButton disabled={props.busy} onClick={onApply} variant="outlined" color="primary" size="large" fullWidth>
                    {__tr("applyNow")}
                </TextTransformNoneButton>
            </Box>
        </Box>
    </Box>
}

export const ApplyCampaign = WithApplyCampaign(BaseApplyCampaign);