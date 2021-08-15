import { css } from "@emotion/css";
import { Box, Typography } from "@material-ui/core";
import { IconEscrow } from "../../components/Icons";
import { CssVariables } from "../../css-variables";
import { __tr } from "../../i18n";

const styles = {
    balance: css`
        padding: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        min-height: 96px;
    `,

    content: css`
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    `,

    title: css`
        font-weight: 300 !important;
        text-transform: uppercase;
    `,

    subtitle: css`
        font-weight: 600 !important;
        color: ${CssVariables.colorGrayV3};
    `,

    icon: css`
        background: ${CssVariables.colorPrimarySurface};
        border-radius: 36px;
        width: 44px;
        height: 44px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `
}

export function EscrowAccountBalanceCard() {
    return <Box className={styles.balance}>
        <Box className={styles.content}>
            <Typography variant="h6" className={styles.title}>{__tr("escrowBalance")}</Typography>
            <Typography variant="body1" className={styles.subtitle}>Rs 45,000</Typography>
        </Box>
        <Box component="span" className={styles.icon}>
            <IconEscrow size={32} />
        </Box>
    </Box>
}