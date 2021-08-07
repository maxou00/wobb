import { TableCell, withStyles } from "@material-ui/core";
import { CssVariables } from "../css-variables";

export const StyledTableHeading = withStyles({
    root: {
        color: CssVariables.colorGrayV2,
        fontWeight: 600,
        fontSize: CssVariables.fontSizeBodyText
    }
})(TableCell);