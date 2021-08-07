import { Box } from "@material-ui/core";
import { PropagateLoader } from "react-spinners";
import { CssVariables } from "../css-variables";

export function Loader() {
    return <Box marginY={2} width={'100%'} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
        <PropagateLoader size={8} color={CssVariables.colorPrimary} />
    </Box>
}