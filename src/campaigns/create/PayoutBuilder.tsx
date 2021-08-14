import { Grid, InputLabel, TextField, Typography } from "@material-ui/core";
import { CssVariables } from "../../css-variables";
import { __tr } from "../../i18n";

interface PayoutBuilderProps {
    type: string;
}

export function PayoutBuilder(props: PayoutBuilderProps) {
    return <Grid container spacing={2} alignItems="center" justifyContent="center">
        {
            props.type === "variablePay" && <>
                <Grid item xs={4}>
                    <InputLabel>{__tr("maxCashPayout")}</InputLabel>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        size="small"
                        fullWidth
                        name="currency"
                        variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        size="small"
                        fullWidth
                        type="number"
                        name="amount"
                        variant="outlined" />
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body2" style={{ color: CssVariables.colorGrayV2 }}>/{__tr("influencer")}</Typography>
                </Grid>
            </>
        }
        {
            props.type === "fixedPay" && <>
                <Grid item xs={4}>
                    <InputLabel>{__tr("cashPayout")}</InputLabel>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        size="small"
                        fullWidth
                        name="currency"
                        variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        size="small"
                        fullWidth
                        type="number"
                        name="amount"
                        variant="outlined" />
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body2" style={{ color: CssVariables.colorGrayV2 }}>/{__tr("influencer")}</Typography>
                </Grid>
            </>
        }
        {
            props.type === "barterPay" && <>
                <>
                    <Grid item xs={4}>
                        <InputLabel>{__tr("productMRP")}</InputLabel>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            size="small"
                            fullWidth
                            name="currency"
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            size="small"
                            fullWidth
                            type="number"
                            name="amount"
                            variant="outlined" />
                    </Grid>
                </>
                <>
                    <Grid item xs={4}>
                        <InputLabel>{__tr("productUrl")}</InputLabel>
                    </Grid>
                </>
                <Grid item xs={8}>
                    <TextField
                        size="small"
                        fullWidth
                        name="url"
                        variant="outlined" />
                </Grid>
            </>
        }
    </Grid >
}
