import { Box, Grid, InputLabel, MenuItem, TextField, withStyles } from "@material-ui/core";
import { useState } from "react";
import { ChangeEvent, useCallback } from "react";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";
import { useAppUser } from "../state/selectors";


const CustomizedBtn = withStyles({
    root: {
        padding: '16px',
        minWidth: '160px'
    }
})(TextTransformNoneButton);

export function EditPersonal() {
    const { user } = useAppUser();
    const [errors, setErrors] = useState<any>({});

    const onSubmit = useCallback((ev: ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();

        let form = ev.currentTarget;

        let data = {
            name: form.uname.value,
            username: form.username.value,
            bio: form.bio.value,
            website: form.website.value,
            email: form.email.value,
            phone: form.phone.value,
            gender: form.gender.value,
            dob: form.dob.valueAsDate,
            interests: [],
            language: form.language.value
        }

        let errors: any = {};

        if(!Validators.isValidName(data.name)) {
            errors.name = __tr("errorInvalidName");
        }
        if(!Validators.isUsername(data.username)) {
            errors.username = __tr("errorInvalidUsername");
        }
        if(!Validators.isBio(data.bio)) {
            errors.bio = __tr("errorInvalidBio");
        }
        if(!Validators.isLink(data.website)) {
            errors.website = __tr("errorInvalidWebsite");
        }
        if(!Validators.isEmail(data.email)) {
            errors.email = __tr("errorInvalidEmail");
        }
        if(!Validators.isPhone(data.phone)) {
            errors.phone = __tr("errorInvalidPhone");
        }
        if(!Validators.isDate(data.dob)) {
            errors.dob = __tr("errorInvalidDob");
        }

        setErrors(errors);
    },[]);

    return <Box>
        <Box component="form" onSubmit={onSubmit}>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("name")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="text" 
                        fullWidth 
                        variant="outlined" 
                        name="uname" 
                        defaultValue={user.name}
                        error={errors.name}
                        helperText={errors.name}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("username")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="text" 
                        fullWidth 
                        variant="outlined" 
                        name="username"
                        error={errors.username}
                        helperText={errors.username}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("bio")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="text" 
                        fullWidth 
                        variant="outlined" 
                        name="bio"
                        error={errors.bio}
                        helperText={errors.bio}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("website")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="text" 
                        fullWidth 
                        variant="outlined" 
                        name="website"
                        error={errors.website}
                        helperText={errors.website} />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("email")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        fullWidth 
                        variant="outlined" 
                        name="email"
                        error={errors.email}
                        helperText={errors.email}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("phoneNumber")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="tel" 
                        fullWidth 
                        variant="outlined"
                        name="phone"
                        error={errors.phone}
                        helperText={errors.phone}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("gender")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                        size="small" 
                        select 
                        fullWidth 
                        variant="outlined" 
                        name="gender">
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
                    <TextField 
                        size="small" 
                        type="date" 
                        fullWidth 
                        variant="outlined" 
                        name="dob"
                        error={errors.dob}
                        helperText={errors.dob}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("interests")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        fullWidth 
                        variant="outlined" 
                        name="interests" />
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("language")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        fullWidth 
                        variant="outlined" 
                        name="language"/>
                </Grid>
            </Grid>
            <Box margin={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <CustomizedBtn type="submit" variant="contained" color="primary" size="large" disableElevation>{__tr("save")}</CustomizedBtn>
            </Box>
        </Box>
    </Box>
}