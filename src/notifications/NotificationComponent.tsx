import { css } from "@emotion/css";
import { Box } from "@material-ui/core";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";

const styles = {
    root: css`
        margin: 8px 0px;
        padding: 4px;
        display: flex;
        flex-direction: row;
        allign-items: flex-start;
        justify-content: flex-start;
    `,
    icon: css`
        width: 46px;
        height: 46px;
        border-radius: 100%;
        background: lightgray;
        display: block;
    `,
    text: css`
        flex-grow: 1;
        margin: 0px 8px;
        padding: 4px 0px;
        font-size: ${CssVariables.fontSizeBodyText};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        p {
            margin: 0;
        }
    `,
    time: css`
        color: ${CssVariables.colorGrayV2};
    `,
    actions: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    `
}

export function NotificationActions() {
    return <>
        <TextTransformNoneButton variant="outlined" color="primary" size="small">View Review</TextTransformNoneButton>
    </>
}

export function NotificationComponent() {
    return <Box className={styles.root}>
        <div className={styles.icon}>

        </div>
        <div className={styles.text}>
            <p>Bibo reviewed your 3 posts. <span className={styles.time}>3h</span> </p>
        </div>
        <div className={styles.actions}>
            <NotificationActions/>
        </div>
    </Box>
}