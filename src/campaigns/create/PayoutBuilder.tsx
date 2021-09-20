import { Grid, InputLabel, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { useCallback } from "react";
import { Payout } from "../../core";
import { Validators } from "../../core/validators";
import { CssVariables } from "../../css-variables";
import { __tr } from "../../i18n";
import { PayoutType } from "../../models";

interface PayoutBuilderProps {
    type: PayoutType;
    payout?: Payout;
    onChange(value: Payout): any;
}

export function PayoutBuilder(props: PayoutBuilderProps) {
    const [currency, setCurrency] = useState("INR");
    const [amount, setAmount] = useState("0");
    const [barterProductUrl, setBarterProductUrl] = useState("");
    const [errors, setErrors] = useState<any>({});

    const submitChanges = useCallback(() => {
        if(Object.keys(errors).length > 0) {
            return ;
        }

        let parsedAmount = parseFloat(amount);
        if(props.type === PayoutType.BARTER) {
            if(parsedAmount > 0 && currency && barterProductUrl) {
                props.onChange({
                    type: PayoutType.BARTER,
                    productMRP: {
                        amount: parsedAmount || 1,
                        currency
                    },
                    productUrl: barterProductUrl
                })
            }
        }
        else if(props.type === PayoutType.FIXED) {
            if(parsedAmount > 0 && currency) {
                props.onChange({
                    type: PayoutType.FIXED,
                    cash: {
                        amount: parsedAmount || 1,
                        currency
                    }
                })
            }
        }
        else if(props.type === PayoutType.VARIABLE) {
            if(parsedAmount > 0 && currency) {
                props.onChange({
                    type: PayoutType.VARIABLE,
                    maxCash: {
                        amount: parsedAmount || 1,
                        currency
                    }
                })
            }
        }
    }, [currency, amount, barterProductUrl, errors, props]);

    const onCurrencyChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value;
        setCurrency(value.toUpperCase());
        submitChanges();
    }, [submitChanges]);

    const onAmountChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value;
        setAmount(value);

        let nextErrs: any = {};
        if(props.type !== PayoutType.BARTER && !Validators.isCashAmount(value)) {
            nextErrs.amount = __tr("errorInvalidAmount");
        }
        else if(props.type === PayoutType.BARTER && !Validators.isBarterAmount(value)) {
            nextErrs.amount = __tr("errorInvalidMRP");
        }
        setErrors(nextErrs);
        submitChanges();
    }, [submitChanges, props]);

    const onBarterProductUrlChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value;
        setBarterProductUrl(value);

        if(!Validators.isLink(value)) {
            let nextErrs: any = {};
            nextErrs.url = __tr("errorInvalidProductUrl");
            setErrors(nextErrs);
        }
        submitChanges();
    }, [submitChanges]);

    return <Grid container spacing={2} alignItems="center" justifyContent="center">
        {
            props.type === PayoutType.VARIABLE && <>
                <Grid item xs={4}>
                    <InputLabel>{__tr("maxCashPayout")}</InputLabel>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        size="small"
                        fullWidth
                        name="currency"
                        variant="outlined"
                        onChange={onCurrencyChange}
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
                        onChange={onAmountChange}
                        error={errors.amount}
                        helperText={errors.amount}/>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body2" style={{ color: CssVariables.colorGrayV2 }}>/{__tr("influencer")}</Typography>
                </Grid>
            </>
        }
        {
            props.type === PayoutType.FIXED && <>
                <Grid item xs={4}>
                    <InputLabel>{__tr("cashPayout")}</InputLabel>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        size="small"
                        fullWidth
                        name="currency"
                        variant="outlined"
                        onChange={onCurrencyChange}
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
                        onChange={onAmountChange}
                        error={errors.amount}
                        helperText={errors.amount}/>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body2" style={{ color: CssVariables.colorGrayV2 }}>/{__tr("influencer")}</Typography>
                </Grid>
            </>
        }
        {
            props.type === PayoutType.BARTER && <>

                <Grid item xs={4}>
                    <InputLabel>{__tr("productMRP")}</InputLabel>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        size="small"
                        fullWidth
                        name="currency"
                        variant="outlined"
                        onChange={onCurrencyChange}
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
                        onChange={onAmountChange}
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
