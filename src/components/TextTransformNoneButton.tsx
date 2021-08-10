import { Button, withStyles } from "@material-ui/core";

export const TextTransformNoneButton = withStyles({
    root: {
        textTransform: 'none'
    }
})(Button)