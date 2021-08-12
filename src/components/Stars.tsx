import { css } from "@emotion/css"
import { CssVariables } from "../css-variables";

const styles = css`
    color: orange;
    font-weight: 500;
    font-size: ${CssVariables.fontSizeBodyText};
`;

export function Stars(props: {count: number}) {
    return <span className={styles} data-role="stars">4.5 ★</span>
}