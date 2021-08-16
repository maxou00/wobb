import { css } from "@emotion/css";
import { Box } from "@material-ui/core";
import { PropsWithChildren } from "react";

const styles = css`
    margin-top: 64px;
    margin-left: 100px;
    margin-right: 100px;

    @media (max-width: 996px) {
        margin-top: 32px;
        margin-left: 50px;
        margin-right: 50px;
    }

    @media (max-width: 780px) {
        margin-top: 16px;
        margin-left: 8px;
        margin-right: 8px;
    }
`
export function FixedMargin(props: PropsWithChildren<{}>){
    return <Box className={styles}>
        {props.children}
    </Box>
}