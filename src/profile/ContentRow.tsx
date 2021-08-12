import { css } from "@emotion/css";
import { Box } from "@material-ui/core";
import { ReactNode } from "react";

const styles = {
    row: css`
        width: 100%;
        padding: 12px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `,
    keyCell: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    `,
    valueCell: css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    `,
}

export function ContentRow(props: { children: ReactNode[] }) {
    return <Box className={styles.row}>
        <Box className={styles.keyCell}>
            {
                props.children[0]
            }
        </Box>
        <Box className={styles.valueCell}>
            {
                props.children[1]
            }
        </Box>
    </Box>
}