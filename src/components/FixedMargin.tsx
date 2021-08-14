import { css } from "@emotion/css";
import { Box } from "@material-ui/core";
import { PropsWithChildren } from "react";

const styles = css`
    margin-left: 100px;
    margin-right: 100px;
`
export function FixedMargin(props: PropsWithChildren<{}>){
    return <Box className={styles}>
        {props.children}
    </Box>
}