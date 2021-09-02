import { css } from "@emotion/css";
import { Box, Button, Divider, Typography, withStyles } from "@material-ui/core";
import { IconCart } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { callRazorPay } from "../core/utils";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";

const PayButton = withStyles({
    root: {
        padding: 16
    }
})(TextTransformNoneButton);


const styles = {
    text: css`
        font-size: 14px;
        color: gray;
    `,
    orderTable: css`
        width: 100%;
        color: ${CssVariables.colorGrayV3}
    `,
    orderKey: css`
        font-weight: 500;
        padding: 8px 16px;
    `,
    orderValue: css`
        font-weight: 500;
        text-align: right;
    `,
    payOffline: css`
        color: gray;
        text-align: center;
    `
}
export function OrderInfluencerSummary() {
    return <Box>
        <Box marginBottom={1} padding={2} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Box marginRight={1}>
                    <IconCart size={24} />
                </Box>
                <Typography variant="h6" style={{ textTransform: 'uppercase' }}>{__tr("orderSummary")}</Typography>
            </Box>
        </Box>
        <Divider />
        <Box padding={4}>
            <p className={styles.text}>{__tr("orderSummaryText")}</p>
            <table className={styles.orderTable}>
                <tbody>
                    <tr>
                        <td className={styles.orderKey}>{__tr("influencerShortlisted")}</td>
                        <td className={styles.orderValue}>120</td>
                    </tr>
                    <tr>
                        <td className={styles.orderKey}>{__tr("payout")}</td>
                        <td className={styles.orderValue}>Rs2000</td>
                    </tr>
                    <tr>
                        <td className={styles.orderKey}>{__tr("gst")}</td>
                        <td className={styles.orderValue}>Rs200</td>
                    </tr>
                    <tr>
                        <td className={styles.orderKey}>{__tr("totalAmount")}</td>
                        <td className={styles.orderValue}>Rs1800</td>
                    </tr>
                </tbody>
            </table>
            <Box paddingY={2}>
                <PayButton fullWidth color="primary" variant="contained" disableElevation onClick={() => callRazorPay(1800)}>{__tr("payAndHire")} (Rs1800)</PayButton>
            </Box>
            <Box padding={1} paddingTop={2}>
                <p className={styles.payOffline}>
                    {__tr("wantToPayOffline")}
                    <Button variant="text" color="primary">{__tr("getPaymentLink")}</Button>
                </p>
            </Box>
        </Box>
    </Box>
}