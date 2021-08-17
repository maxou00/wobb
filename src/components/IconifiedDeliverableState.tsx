import { css } from "@emotion/css";
import { CssVariables } from "../css-variables";
import { IconDeliverablePending, IconDeliverableReviewDone, IconDeliverableReviewPending, IconDeliverableSubmitted } from "./Icons";

const styles = {
    content: css`
        width:100%;
        display: grid;
        grid-template-columns: 24px auto 24px;
    `,
    left: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    right: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    barWrapper: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    bar: css`
        height: 2px;
        width: 100%;
        background: ${CssVariables.colorGrayV1};
        display: block;
    `,
}

interface StateProps {
    submitted?: boolean;
    reviewed?: boolean;
}

export function IconifiedDeliverableState(props: StateProps) {
    return <div className={styles.content}>
        <div className={styles.left}>
            {!props.submitted && <IconDeliverablePending size={32} />}
            {props.submitted && <IconDeliverableSubmitted size={32} />}
        </div>
        <div className={styles.barWrapper}>
            <div className={styles.bar}></div>
        </div>
        <div className={styles.right}>
            {!props.reviewed && <IconDeliverableReviewPending size={32} />}
            {props.reviewed && <IconDeliverableReviewDone size={32} />}
        </div>
    </div>
}