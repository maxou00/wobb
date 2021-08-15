import { css } from "@emotion/css";
import { Box } from "@material-ui/core";
import { IconBarter, IconWobbCoins } from "../../components/Icons";
import { TextTransformNoneButton } from "../../components/TextTransformNoneButton";
import { CssVariables } from "../../css-variables";
import { __tr } from "../../i18n";

const styles = {
    list: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    `,

    divider: css`
        width: 1px;
        height: 64px;
        margin: 0px 8px;
        background: ${CssVariables.colorGrayV1};
        display: block;
    `,

    balance: css`
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 160px;
    `,

    content: css`
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,

    header: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `,

    icon: css`
        width: 24px;
        font-size: 21px;
        font-weight: 400;
        font-size: 21px;
        margin: 0px 2px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,

    title: css`
        font-weight: 600;
        font-size: 21px;
    `,

    subtitle: css`
        font-size: 14px;
        color: ${CssVariables.colorGrayV3};
    `,

    actions: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,

    iconBarter: css`
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

export function BalanceCard() {
    return <Box className={styles.list}>
        <Box className={styles.balance}>
            <Box className={styles.content}>
                <Box className={styles.header}>
                    <Box component="span" className={styles.icon}>Rs</Box>
                    <Box component="span" className={styles.title}>45,000</Box>
                </Box>
                <Box component="span" className={styles.subtitle}>{__tr("cashEarned")}</Box>
            </Box>
            <Box marginY={2} className={styles.actions}>
                <TextTransformNoneButton
                    variant="contained"
                    color="primary"
                    disableElevation
                    fullWidth>{__tr("withdraw")}</TextTransformNoneButton>
            </Box>
        </Box>
        <span className={styles.divider}></span>
        <Box className={styles.balance}>
            <Box className={styles.content}>
                <Box className={styles.header}>
                    <Box component="span" className={styles.icon}>
                        <IconWobbCoins size={24} />
                    </Box>
                    <Box component="span" className={styles.title}>10,000</Box>
                </Box>
                <Box component="span" className={styles.subtitle}>{__tr("wobbCoins")}</Box>
            </Box>
            <Box marginY={2} className={styles.actions}>
                <TextTransformNoneButton disabled variant="contained" color="primary" disableElevation>Redeem</TextTransformNoneButton>
                <Box component="span" fontSize={CssVariables.fontSizeAnySmall} color={CssVariables.colorGrayV2}>Coming soon</Box>
            </Box>
        </Box>
        <span className={styles.divider}></span>
        <Box className={styles.balance}>
            <Box className={styles.content}>
                <Box className={styles.header}>
                    <Box component="span" className={styles.icon}>Rs</Box>
                    <Box component="span" className={styles.title}>20,000</Box>
                </Box>
                <Box component="span" className={styles.subtitle}>{__tr("barterEarned")}</Box>
            </Box>
            <Box marginY={2} className={styles.actions}>
                <Box className={styles.iconBarter}>
                    <IconBarter size={36} />
                </Box>
            </Box>
        </Box>
    </Box>
}