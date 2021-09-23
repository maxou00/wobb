import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr, __trParams } from "../i18n";
import { applyForCampaign } from "../state/middlewares";
import { useSingleJob } from "../state/selectors";
import { useProvidedCampaign } from "./ViewCampaign";

export interface WithApplyCampaignProps {
    canApply: boolean;
    busy: boolean;
    apply(): any;
}

export function WithApplyCampaign<T = {}>(WrappedComponent: React.ComponentType<T & WithApplyCampaignProps>) {

    function Component(props: T) {
        const [dialogOpen, setDialogOpen] = useState(false);
        const [amount, setAmount] = useState("0");
        const [currency] = useState("INR");
        const [errors, setErrors] = useState<any>({});

        const { campaign } = useProvidedCampaign();
        const job = useSingleJob(campaign.id);

        const dispatch = useDispatch();
        const [busy, setBusy] = useState(false);

        const onApply = useCallback(async () => {
            if (!job) {
                let nextErrors: any = {};
                let parsedAmount = parseFloat(amount);
                if(!parsedAmount) {
                    nextErrors.amount = __tr("errorInvalidAmount")
                }

                setErrors(nextErrors);
                if(Object.keys(nextErrors).length > 0) {
                    return; 
                }
                
                setBusy(true);
                (dispatch(applyForCampaign(campaign, {amount: parsedAmount, currency})) as unknown as Promise<any>)
                    .then((done) => {
                        toast.success(__trParams("appliedForCampaign", {
                            campaign: campaign.Name
                        }))
                    }).finally(() => {
                        setBusy(false);
                        setAmount("0");
                        setDialogOpen(false);
                    });
            }
        }, [amount, campaign, currency, dispatch, job]);

        const onCancel = useCallback(() => {
            setAmount("0");
            setDialogOpen(false);
        }, []);

        return <>
            <WrappedComponent {...props} busy={busy} apply={() => setDialogOpen(true)} canApply={!job} />
            <Dialog maxWidth="sm" fullWidth open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>{__tr("enterYourBidPrice")}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <TextField
                                size="small"
                                fullWidth
                                label={__tr("amount")}
                                value={amount}
                                onChange={(ev) => setAmount(ev.target.value)}
                                error={errors.amount}
                                helperText={errors.amount}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                size="small"
                                fullWidth
                                label={__tr("currency")}
                                value={currency}/>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <TextTransformNoneButton variant="outlined" color="default" onClick={onCancel}>{__tr("cancel")}</TextTransformNoneButton>
                    <TextTransformNoneButton variant="contained" color="primary" onClick={onApply}>{__tr("applyNow")}</TextTransformNoneButton>
                </DialogActions>
            </Dialog>
        </>
    }

    Component.displayName = WrappedComponent.displayName || "WithApplyCampaign"

    return Component;

}