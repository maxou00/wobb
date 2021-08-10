import { css } from "@emotion/css";
import { Box, Divider } from "@material-ui/core";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";


const styles = {
    resume: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 16px 4px;
    `,

    counter: css`
        font-size: 48px;
        font-weight: 700;
        color: ${CssVariables.colorPrimary}
    `,

    details: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `,

    icon: css`
        background: red;
        width: 24px;
        height: 24px;
        display: block;
    `,

    title: css`
        margin-left: 8px;
        font-size: ${CssVariables.fontSizeBodyText};
        color: ${CssVariables.colorGrayV3}
    `
}
export function DeliverableDashboard() {
    return <Box>
        <Box paddingX={2} paddingY={.5}>
            <h4>{__tr("dashboard")}</h4>
        </Box>
        <Divider />
        <Box padding={4}>
            <div className={styles.resume}>
                <span className={styles.counter}>367</span>
                <div className={styles.details}>
                    <span className={styles.icon}></span>
                    <span className={styles.title}>{__tr("deliverables")}</span>
                </div>
            </div>
            <div className={styles.resume}>
                <span className={styles.counter}>15</span>
                <div className={styles.details}>
                    <span className={styles.icon}></span>
                    <span className={styles.title}>{__tr("contentApproved")}</span>
                </div>
            </div>
            <div className={styles.resume}>
                <span className={styles.counter}>15</span>
                <div className={styles.details}>
                    <span className={styles.icon}></span>
                    <span className={styles.title}>{__tr("postComplete")}</span>
                </div>
            </div>
        </Box>
    </Box>
}