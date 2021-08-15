import { Box, Checkbox, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, TextField, Typography } from "@material-ui/core";
import { CountryField } from "../../components/CountryField";
import { TextTransformNoneButton } from "../../components/TextTransformNoneButton";
import { __tr } from "../../i18n";

export function EditOrderBillingAddress() {
    return <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={4}>
            <InputLabel>{__tr("type")}</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <RadioGroup row>
                <FormControlLabel control={<Radio color="primary" />} label={__tr("business")} />
                <FormControlLabel control={<Radio color="primary" />} label={__tr("individual")} />
            </RadioGroup>
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("name")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField size="small" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("address")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField size="small" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("country")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <CountryField size="small" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("pinCode")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField size="small" variant="outlined" fullWidth />
            <FormControlLabel
                control={<Checkbox color="primary" />}
                label={
                    <Typography variant="body2">{__tr("sameAsShipping")}</Typography>
                } />
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("gstNo")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField size="small" variant="outlined" fullWidth />
            <FormControlLabel
                control={<Checkbox color="primary" />}
                label={
                    <Typography variant="body2">{__tr("dontHaveGST")}</Typography>
                } />
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("panNo")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField size="small" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <TextTransformNoneButton variant="contained" color="primary" size="large">{__tr("saveAndContinue")}</TextTransformNoneButton>
            </Box>
        </Grid>
    </Grid>
}