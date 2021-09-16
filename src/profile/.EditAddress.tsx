/**
 * DEPRECATED COMPONENT
 */

import { DataStore } from "@aws-amplify/datastore";
import { Box, Grid, InputLabel, TextField, withStyles } from "@material-ui/core";
import { useState } from "react";
import { ChangeEvent, useCallback } from "react";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";
import { TaskStatus } from "../models";
import { Task } from "../models";


const CustomizedBtn = withStyles({
    root: {
        padding: '16px',
        minWidth: '160px'
    }
})(TextTransformNoneButton);

export function EditAddress() {
    const[errors, setErrors] = useState<any>({});

    const onSubmit = useCallback(async(ev: ChangeEvent<HTMLFormElement>) => {
        let form = ev.currentTarget;
        let data = {
            address: form.address.value,
            city: form.city.value,
            state: form.state.value,
            pinCode: form.pinCode.value
        }
        let newErrors: any = {};
        if(Validators.isAddress(data.address)) {
            newErrors.address = __tr("errorAddress");
        }
        if(Validators.isPinCode(data.pinCode)) {
            newErrors.address = __tr("errorAddress");
        }
        setErrors(newErrors);
    }, []);

    return <Box>
        <Box component="form">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("address")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="text" 
                        fullWidth 
                        variant="outlined" 
                        name="address"
                        error={errors.address}
                        helperText={errors.address}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("city")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="text" 
                        fullWidth 
                        variant="outlined" 
                        name="city"
                        error={errors.city}
                        helperText={errors.city}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("state")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="text" 
                        fullWidth 
                        variant="outlined" 
                        name="state"
                        error={errors.state}
                        helperText={errors.state}/>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <InputLabel>{__tr("pinCode")}</InputLabel>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                        size="small" 
                        type="text" 
                        fullWidth 
                        variant="outlined" 
                        name="pinCode"
                        error={errors.pinCode}
                        helperText={errors.pinCode}/>
                </Grid>
            </Grid>
            <Box margin={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <CustomizedBtn variant="contained" color="primary" size="large" disableElevation>{__tr("save")}</CustomizedBtn>
            </Box>
        </Box>
    </Box>
}