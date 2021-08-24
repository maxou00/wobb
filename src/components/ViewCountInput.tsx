import { css } from "@emotion/css";
import { InputBase } from "@material-ui/core";
import { CssVariables } from "../css-variables";

const styles = {
    wrapper: css`
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: ${CssVariables.colorGrayV1};
        height: 46px;
        border-radius: 8px;
        border: 1px solid ${CssVariables.colorGrayV1};
        position: relative;
    `,
    text: css`
        font-weight: 600;
        font-size: 12px;
        white-space: nowrap;
        padding: 0px 8px;
        display: inline-block;
    `,
    in: css`
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 4px;
        background: ${CssVariables.colorWhite};
        flex-grow: 1;
        height: 100%;
    `
}

export function ViewCountInput() {
    return <div className={styles.wrapper}>
        <span className={styles.text}>Total View Count</span>
        <InputBase className={styles.in} placeholder="e.g: 218K"/>
    </div>
}