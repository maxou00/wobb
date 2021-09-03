import { Box, Grid, InputLabel, TextField, withStyles } from "@material-ui/core";
import { ChangeEvent, useCallback } from "react";
import { useState } from "react";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";


const CustomizedBtn = withStyles({
    root: {
        padding: '16px',
        minWidth: '160px'
    }
})(TextTransformNoneButton);

export function EditPassword() {
    const [errors, setErrors] = useState<any>({});

    const onSubmit = useCallback((ev: ChangeEvent<HTMLFormElement>) => {
        let form = ev.currentTarget;

        let data = {
            old: form.old.value,
            new: form.new.value,
            confirm: form.confirm.value
        }

        let newErrs: any = {};

        if(!data.old){
            newErrs.old = __tr("errorEnterOldPassword")
        }
        else if(!Validators.isValidPassword(data.old)) {
            newErrs.old = __tr("errorInvalidPassword")
        }

        if(data.new) {
            if(!Validators.isValidPassword(data.new)) {
                newErrs.new = __tr("errorInvalidPassword");
            }
            else if (data.old === data.new) {
                newErrs.new = __tr("errorPasswordMustBeDifferent");
            }
        }


        if(data.new && data.new !== data.confirm) {
            newErrs.confirm = __tr("errorPasswordDontMatch");
        }

        setErrors(newErrs);
    }, []);

    return <Box>
        <Box component="form">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("oldPassword")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="password" 
                        fullWidth 
                        variant="outlined" 
                        name="oldPassword"
                        error={errors.old}
                        helperText={errors.old}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("newPassword")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="password" 
                        fullWidth 
                        variant="outlined" 
                        name="newPassword"
                        error={errors.new}
                        helperText={errors.new}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("confirmNewPassword")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="password" 
                        fullWidth 
                        variant="outlined" 
                        name="confirmNewPassword"
                        error={errors.confirm}
                        helperText={errors.confirm}/>
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