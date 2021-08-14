import { Slider, withStyles } from "@material-ui/core";
import { CssVariables } from "../css-variables";

export const StyledSlider = withStyles({
    root: {
        height: '6px',
    },
    rail: {
        height: '6px',
        borderRadius: '6px'
    },
    track: {
        height: '6px',
        borderRadius: '6px'
    },
    thumb: {
        background: 'white',
        width: '24px',
        height: '24px',
        transform: 'translateY(-15%)',
        border: `6px solid ${CssVariables.colorPrimary}`
    }
})(Slider);