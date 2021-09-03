import { Grid, InputLabel, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { useCallback } from "react";
import { Validators } from "../../core/validators";
import { CssVariables } from "../../css-variables";
import { __tr } from "../../i18n";

interface PayoutBuilderProps {
    type: string;
}

export function PayoutBuilder(props: PayoutBuilderProps) {
    const [currency, setCurrency] = useState("INR");
    const [amount, setAmount] = useState("0");
    const [barterProductUrl, setBarterProductUrl] = useState("");
    const [errors, setErrors] = useState<any>({});

    const onCurrencyChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value;
        setCurrency(value);
    }, []);

    const onVariablePayChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value;
        setAmount(value);
        let parsed = parseInt(value);

        let nextErrs = {...errors};

        if(parsed && parsed >= 0 && currency) {
            //// notify back to ancestor the amount and the currency
        }
        else if(props.type !== "barterPay" && !Validators.isCashAmount(value)) {
            nextErrs.amount = __tr("errorInvalidAmount");
        }
        else if(props.type === "barterPay" && !Validators.isBarterAmount(value)) {
            nextErrs.amount = __tr("errorInvalidMRP");
        }
        setErrors(nextErrs);
    }, [currency, errors, props.type]);

    const onBarterProductUrlChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value;
        setBarterProductUrl(value);

        if(Validators.isLink(value)) {
            //// notify back to ancestor the amount and the currency
        }
        else {
            let nextErrs = {...errors};
            nextErrs.url = __tr("errorInvalidProductUrl");
            setErrors(nextErrs);
        }
    }, [errors]);

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
                        variant="outlined"
                        onChange={(ev) => onCurrencyChange}
                        value={currency}
                        error={errors.currency}
                        helperText={errors.currency}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        size="small"
                        fullWidth
                        type="text"
                        name="amount"
                        variant="outlined"
                        value={amount}
                        onChange={onVariablePayChange}
                        error={errors.amount}
                        helperText={errors.amount}/>
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
                        variant="outlined"
                        onChange={(ev) => onCurrencyChange}
                        value={currency}
                        error={errors.currency}
                        helperText={errors.currency}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        size="small"
                        fullWidth
                        type="number"
                        name="amount"
                        variant="outlined"
                        value={amount}
                        onChange={onVariablePayChange}
                        error={errors.amount}
                        helperText={errors.amount}/>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body2" style={{ color: CssVariables.colorGrayV2 }}>/{__tr("influencer")}</Typography>
                </Grid>
            </>
        }
        {
            props.type === "barterPay" && <>

                <Grid item xs={4}>
                    <InputLabel>{__tr("productMRP")}</InputLabel>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        size="small"
                        fullWidth
                        name="currency"
                        variant="outlined"
                        onChange={(ev) => onCurrencyChange}
                        value={currency}
                        error={errors.currency}
                        helperText={errors.currency}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        size="small"
                        fullWidth
                        type="number"
                        name="amount"
                        variant="outlined"
                        value={amount}
                        onChange={onVariablePayChange}
                        error={errors.amount}
                        helperText={errors.amount}/>
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>{__tr("productUrl")}</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        size="small"
                        fullWidth
                        name="url"
                        variant="outlined"
                        value={barterProductUrl}
                        onChange={onBarterProductUrlChange}
                        error={errors.url}
                        helperText={errors.url}/>
                </Grid>
            </>
        }
    </Grid >
}
