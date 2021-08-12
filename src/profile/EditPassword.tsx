import { Box, Grid, InputLabel, TextField, withStyles } from "@material-ui/core";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";


const CustomizedBtn = withStyles({
    root: {
        padding: '16px',
        minWidth: '160px'
    }
})(TextTransformNoneButton);

export function EditPassword() {

    return <Box>
        <Box component="form">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("oldPassword")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="password" fullWidth variant="outlined" name="oldPassword" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("newPassword")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="password" fullWidth variant="outlined" name="newPassword" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("confirmNewPassword")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="password" fullWidth variant="outlined" name="confirmNewPassword" />
                </Grid>
            </Grid>
            <Box marginTop={4} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <CustomizedBtn variant="contained" color="primary" size="large" disableElevation>{__tr("changePassword")}</CustomizedBtn>
            </Box>
            <Box margin={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <CustomizedBtn variant="text" color="primary" disableElevation>{__tr("forgotPassword")}</CustomizedBtn>
            </Box>
        </Box>
    </Box>
}