import { Box, Grid, InputLabel, TextField, withStyles } from "@material-ui/core";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";


const CustomizedBtn = withStyles({
    root: {
        padding: '16px',
        minWidth: '160px'
    }
})(TextTransformNoneButton);

export function EditAddress() {

    return <Box>
        <Box component="form">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("address")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="text" fullWidth variant="outlined" name="address" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("city")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="text" fullWidth variant="outlined" name="city" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("state")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="text" fullWidth variant="outlined" name="state" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("pinCode")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="text" fullWidth variant="outlined" name="pinCode" />
                </Grid>
            </Grid>
            <Box margin={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <CustomizedBtn variant="contained" color="primary" size="large" disableElevation>{__tr("save")}</CustomizedBtn>
            </Box>
        </Box>
    </Box>
}