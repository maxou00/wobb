import { Box, Grid, InputLabel, MenuItem, TextField, withStyles } from "@material-ui/core";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";


const CustomizedBtn = withStyles({
    root: {
        padding: '16px',
        minWidth: '160px'
    }
})(TextTransformNoneButton);

export function EditPersonal() {

    return <Box>
        <Box component="form">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("name")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="text" fullWidth variant="outlined" name="uname" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("username")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="text" fullWidth variant="outlined" name="username" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("bio")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="text" fullWidth variant="outlined" name="bio" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("website")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="text" fullWidth variant="outlined" name="website" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("email")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" fullWidth variant="outlined" name="email" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("phoneNumber")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" type="tel" fullWidth variant="outlined" name="phoneNumber" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("gender")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" select fullWidth variant="outlined" name="gender">
                        <MenuItem value="male">{__tr("male")}</MenuItem>
                        <MenuItem value="female">{__tr("female")}</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("dob")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" type="date" fullWidth variant="outlined" name="dob" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("interests")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" fullWidth variant="outlined" name="interests" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("name")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField size="small" fullWidth variant="outlined" name="language" />
                </Grid>
            </Grid>
            <Box margin={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <CustomizedBtn variant="contained" color="primary" size="large" disableElevation>{__tr("save")}</CustomizedBtn>
            </Box>
        </Box>
    </Box>
}