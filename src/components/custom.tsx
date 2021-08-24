import { Tab, TableCell, Tabs, Typography, withStyles } from "@material-ui/core";
import { CssVariables } from "../css-variables";

export const StyledTableHeading = withStyles({
    root: {
        color: CssVariables.colorGrayV2,
        fontWeight: 600,
        fontSize: CssVariables.fontSizeBodyText
    }
})(TableCell);

export const StyledTabs = withStyles({
    indicator: {
        width: '8px',
        left: 0
    }
})(Tabs)

export const StyledTab = withStyles({
    root: {
        textTransform: 'capitalize',
        borderBottom: `1px solid ${CssVariables.colorGrayV1}`,
        '&:last-of-type': {
            borderBottom: 'none',
        }
    },
    label: {
        background: 'red'
    }
})(Tab);

export const SemiBoldText = withStyles({
    root: {
        fontWeight: 600
    }
})(Typography);

export const UppercaseSbText = withStyles({
    root: {
        textTransform: 'uppercase'
    }
})(SemiBoldText);