import { css } from "@emotion/css";
import { Avatar, Box, Divider, Grid, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { MdArrowDownward } from "react-icons/md";
import { Link } from "react-router-dom";
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
        margin-bottom: 8px 0px;
    `,
    title: css``,
    content: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    `,
    meta: css``,
    sourceRow: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0px 8px;
    `,
    dataRow: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 0px;
    `
}

function EarningCard() {
    return <Box className={styles.card}>
        <Box className={styles.content}>
            <Box>
                <Typography variant="body2">Cash Earned</Typography>
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
            <Typography variant="body1">BIBA</Typography>
            <Typography variant="body2" style={{ color: CssVariables.colorGrayV3 }}>Ready to stich with Biba</Typography>
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
                <Typography variant="body1">My Wallet</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <IconWallet size={32} />
            </Box>
        </Box>
    </Box>
}

export function TransactionReceipt() {

    return <Box>
        <Box padding={2}>
            <Typography variant="h6" style={{ textTransform: 'uppercase' }}>{__tr("receipt")}</Typography>
        </Box>
        <Divider />
        <Box>
            <EarningCard />
            <Box padding={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SourceAndDest />
                    </Grid>
                    <Grid item xs={12}>
                        <Box>
                            <Box className={styles.dataRow} >
                                <Typography variant="body2">Campaign amount</Typography>
                                <Typography variant="body2">+Rs 3,000</Typography>
                            </Box>
                            <Box className={styles.dataRow}>
                                <Typography variant="body2">Wobb fees</Typography>
                                <Typography variant="body2">- Rs. 1,000</Typography>
                            </Box>
                            <Box className={styles.dataRow}>
                                <Typography variant="body2">GST</Typography>
                                <Typography variant="body2">- Rs. 1,000</Typography>
                            </Box>
                            <Box className={styles.dataRow}>
                                <Typography variant="body2">TDS <Link to="/">Know More</Link> </Typography>
                                <Typography variant="body2">- Rs. 1,000</Typography>
                            </Box>
                            <Divider />
                            <Box className={styles.dataRow}>
                                <Typography variant="body2" style={{ fontWeight: 500 }}>Net cash earned</Typography>
                                <Typography variant="body2" style={{ fontWeight: 500 }}>Rs. 3,000</Typography>
                            </Box>
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