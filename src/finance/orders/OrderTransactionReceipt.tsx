import { css } from "@emotion/css";
import { Avatar, Box, Divider, Grid, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { MdArrowDownward } from "react-icons/md";
import { IconDoneFilled, IconFundTransfer, IconWallet } from "../../components/Icons";
import { TextTransformNoneButton } from "../../components/TextTransformNoneButton";
import { CssVariables } from "../../css-variables";
import { __tr } from "../../i18n";

const styles = {
    card: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        background: ${green[50]};
        min-height: 120px;
        padding: 16px;
    `,

    title: css``,
    content: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    `,

    sourceRow: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0px 8px;
    `,

    destRow: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    `,

    dataRow: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 8px;
    `
}

function AmountCard() {
    return <Box className={styles.card}>
        <Box className={styles.dataRow}>
            <Box>
                <Typography variant="body2">{__tr("paid")}</Typography>
                <Typography variant="h4">₹ 3,000</Typography>
            </Box>
            <Box component="span">
                <IconDoneFilled size={46} />
            </Box>
        </Box>
        <Box>
            <Typography variant="body2" style={{ color: CssVariables.colorGrayV2 }}>16 July 2021, 04:37 PM</Typography>
        </Box>
    </Box>
}

function SourceAndDest() {
    return <Box padding={2}>
        <Box className={styles.sourceRow} paddingY={2}>
            <Box>
                <Typography variant="body1">SBI Bank</Typography>
            </Box>
            <Box>
                <Avatar />
            </Box>
        </Box>
        <Box>
            <IconFundTransfer size={24} />
        </Box>
        <Box className={styles.sourceRow} paddingY={2}>
            <Box>
                <Typography variant="body1">Escrow Wallet</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <IconWallet size={32} />
            </Box>
        </Box>
    </Box>
}

function PaymentDetails() {
    return <>
        <Box className={styles.dataRow} >
            <Typography variant="body2">Influencers Shortlisted</Typography>
            <Typography variant="body2">120</Typography>
        </Box>
        <Box className={styles.dataRow}>
            <Typography variant="body2">Payouts</Typography>
            <Typography variant="body2">Rs 2,000</Typography>
        </Box>
        <Box className={styles.dataRow}>
            <Typography variant="body2">GST</Typography>
            <Typography variant="body2">Rs 200</Typography>
        </Box>
        <Divider />
        <Box className={styles.dataRow}>
            <Typography variant="body2" style={{ fontWeight: 500 }}>Net cash paid</Typography>
            <Typography variant="body2" style={{ fontWeight: 500 }}>Rs 3,000</Typography>
        </Box>
        <Box paddingX={1}>
            <Typography variant="body2" style={{color: CssVariables.colorGrayV2}}>Transaction Ref. ID: 1234567890</Typography>
        </Box>
    </>
}

export function OrderTransactionReceipt() {

    return <Box>
        <Box padding={2}>
            <Typography variant="h6" style={{ textTransform: 'uppercase' }}>{__tr("receipt")}</Typography>
        </Box>
        <Divider />
        <Box>
            <AmountCard />
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SourceAndDest />
                    </Grid>
                    <Grid item xs={12}>
                        <Box paddingX={2} paddingY={1} style={{ background: CssVariables.colorPrimarySurface, width: '100%' }}>
                            <Typography variant="body1">Payment Details</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box paddingX={1} paddingY={1}>
                            <PaymentDetails />
                            <Box>
                                <TextTransformNoneButton
                                    variant="text"
                                    color="primary"
                                    startIcon={<MdArrowDownward size={16} />}>
                                    Download Invoice
                                </TextTransformNoneButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
}