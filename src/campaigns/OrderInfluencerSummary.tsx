import { DataStore } from "@aws-amplify/datastore";
import { css } from "@emotion/css";
import { Box, Button, Divider, Typography, withStyles } from "@material-ui/core";
import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { IconCart } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { GST_FEE_PERCENT } from "../core/constants";
import { callRazorPay, padZero } from "../core/utils";
import { CssVariables } from "../css-variables";
import { __tr, __trParams } from "../i18n";
import { Jobs } from "../models";
import { JobStatus } from "../models";
import { useProvidedApplicants } from "../state/ProvidedApplicantsContext";

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
    const [busy, setBusy] = useState(false);
    const {applicants} = useProvidedApplicants();

    const shortListed = useMemo(() => {
        return applicants.filter((a) => a.status === JobStatus.SHORT_LISTED);
    }, [applicants]);

    const totalPayout = useMemo(() => {
        return shortListed.reduce((prev,curr) => prev+ (curr.bidPrice || 0), 0)  
    }, [shortListed]);

    const gstFee = useMemo(() => {
        return (totalPayout * GST_FEE_PERCENT / 100)
    }, [totalPayout]);

    const markJobsAsHired = useCallback(async() => {
        return await Promise.all(
            shortListed.map((job) => {
                return DataStore.save(Jobs.copyOf(job, j => {
                    j.status = JobStatus.HIRED;
                    j.hiredAt = new Date(Date.now()).toISOString();
                }))
            })
        )
        .then((result) => {
            toast.success(
                __trParams("hiringComplete", {
                    count: padZero(shortListed.length)
                })
            )
        })
    }, [shortListed]);

    const onPaymentSuccess = useCallback(async(response: any) => {
        let {payment_id, razor_payment_id, razor_signature} = response;
        /// (TODO: SEND PAYMENT DETAILS TO SERVER)
        ///mark shortlisted as hired.
        setBusy(true);
        markJobsAsHired()
        .finally(() => {
            setBusy(false);
        })
    }, [markJobsAsHired]);

    const onPaymentFailure = useCallback((failure: any) => {
        alert(JSON.stringify(failure));
    }, []);
    
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
                        <td className={styles.orderValue}>{padZero(shortListed.length)}</td>
                    </tr>
                    <tr>
                        <td className={styles.orderKey}>{__tr("payout")}</td>
                        <td className={styles.orderValue}>INR {totalPayout}</td>
                    </tr>
                    <tr>
                        <td className={styles.orderKey}>{__tr("gst")}</td>
                        <td className={styles.orderValue}>INR {gstFee}</td>
                    </tr>
                    <tr>
                        <td className={styles.orderKey}>{__tr("totalAmount")}</td>
                        <td className={styles.orderValue}>{gstFee + totalPayout}</td>
                    </tr>
                </tbody>
            </table>
            <Box paddingY={2}>
                <PayButton fullWidth color="primary" variant="contained" disableElevation onClick={() => callRazorPay(gstFee + totalPayout, onPaymentSuccess, onPaymentFailure)}>{__tr("payAndHire")} (INR{gstFee + totalPayout})</PayButton>
            </Box>
            <Box padding={1} paddingTop={2}>
                <p className={styles.payOffline}>
                    {__tr("wantToPayOffline")}
                    <Button disabled={busy} variant="text" color="primary">{__tr("getPaymentLink")}</Button>
                </p>
            </Box>
        </Box>
    </Box>
}