import { Box, Chip, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, FormControlLabel, Grid, IconButton, InputLabel, Popover, Radio, RadioGroup, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, MouseEvent, useMemo, useRef } from "react";
import { useCallback, useState } from "react";
import { MdArrowDropDown, MdClose } from "react-icons/md";
import { StyledSlider } from "../../components/StyledSlider";
import { TextTransformNoneButton } from "../../components/TextTransformNoneButton";
import { __tr } from "../../i18n";
import { BrandPicker } from "../../components/pickers/BrandPicker";
import { CategoryPicker } from "../../components/pickers/CategoryPicker";
import { DeliverablePicker } from "../../components/pickers/DeliverablePicker";
import { FollowerRangePicker } from "../../components/pickers/FollowerRangePicker";
import { PromotionGoalsPicker } from "../../components/pickers/PromotionGoalsPicker";
import { PayoutBuilder } from "./PayoutBuilder";
import { InfluencerRequirementAdvancedFilter } from "./InfluencerRequirementAdvancedFilter";
import { Validators } from "../../core/validators";
import { Brand, Platform } from "../../models";
import { grey } from "@material-ui/core/colors";
import { DeliverableWithCount, FollowerRange, InfluencerRequirements, Payout } from "../../core";
import { PayoutType } from "../../models";
import { Campaign } from "../../models";
import { CampaignStatus } from "../../models";
import { DataStore } from "@aws-amplify/datastore";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { appendCampaign } from "../../state/action-creators";
import { useAppUser } from "../../state/selectors";

interface Props extends DialogProps { }

export function CreateCampaign(props: Props) {
    const { user } = useAppUser();
    const dispatch = useDispatch();
    const [busy, setBusy] = useState(false);
    const [goalOpen, setGoalOpen] = useState(false);
    const [useCustomFollowerRange, setUseCustomFollowerRange] = useState(false);
    const [brandPickerOpen, setBrandPickerOpen] = useState(false);

    const [campaignTitle, setCampaignTitle] = useState("");
    const [platform, setPlatform] = useState(Platform.INSTAGRAM);
    const [payoutType, setPayoutType] = useState(PayoutType.FIXED);
    const [errors, setErrors] = useState<any>({});
    const [promotionGoal, setPromotionGoal] = useState<string>();
    const [categories, setCategories] = useState<string[]>([]);
    const [followerRanges, setFollowerRanges] = useState<FollowerRange[]>([]);
    const [customRange, setCustomRange] = useState<number[]>([0, 10]);
    const [noInfluencers, setNoInfluencers] = useState<string>("0");
    const [deliverables, setDeliverables] = useState<DeliverableWithCount[]>([]);
    const [brand, setBrand] = useState<Brand>();
    const [payout, setPayout] = useState<Payout>();
    const [advancedRequirements, setAdvancedRequirements] = useState<InfluencerRequirements>();

    const promotionGoalPickerAnchor = useRef<HTMLInputElement | null>();
    const [followerRangePickerAnchor, setFollowerRangeAnchor] = useState<HTMLDivElement>();
    const [categoryPickerAnchor, setCategoryPickerAnchor] = useState<HTMLDivElement>();
    const [deliverablePickerAnchor, setDeliverableAnchor] = useState<HTMLDivElement>();
    const brandPickerAnchor = useRef<HTMLInputElement | null>();
    const [advancedFilterAnchor, setAdvancedFilterAnchor] = useState<HTMLButtonElement>();

    const onClose = useCallback(() => {
        if (props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [props]);

    const onOpenPromotionGoal = useCallback(() => {
        promotionGoalPickerAnchor.current?.blur();
        setGoalOpen(true);
    }, [promotionGoalPickerAnchor]);

    const onClosePromotionGoal = useCallback(() => {
        promotionGoalPickerAnchor.current?.blur();
        setGoalOpen(false);
    }, [promotionGoalPickerAnchor]);

    const onOpenFollowerRange = useCallback((ev: MouseEvent<HTMLDivElement>) => {
        setFollowerRangeAnchor(ev.currentTarget);
    }, []);

    const onCloseFollowerRange = useCallback(() => {
        setFollowerRangeAnchor(undefined);
    }, []);

    const requireCustomFollowerRange = useCallback(() => {
        onCloseFollowerRange();
        setUseCustomFollowerRange(true);
        setFollowerRanges([]);
    }, [onCloseFollowerRange]);

    const onOpenCategory = useCallback((ev: MouseEvent<HTMLDivElement>) => {
        setCategoryPickerAnchor(ev.currentTarget);
    }, []);

    const onCloseCategory = useCallback(() => {
        setCategoryPickerAnchor(undefined);
    }, []);

    const onOpenDeliverables = useCallback((ev: MouseEvent<HTMLDivElement>) => {
        setDeliverableAnchor(ev.currentTarget);
    }, []);

    const onCloseDeliverables = useCallback(() => {
        setDeliverableAnchor(undefined);
    }, []);

    const onOpenBrands = useCallback(() => {
        brandPickerAnchor.current?.blur();
        setBrandPickerOpen(true);
    }, [brandPickerAnchor]);

    const onCloseBrands = useCallback(() => {
        brandPickerAnchor.current?.blur();
        setBrandPickerOpen(false);
    }, [brandPickerAnchor]);

    const onRemoveCategory = useCallback((cat: string) => {
        let next = [...categories];
        let index = next.findIndex((c) => c === cat);
        if (index > -1) {
            next.splice(index, 1);
            setCategories(next);
        }
    }, [categories]);

    const onRemoveFollowerRange = useCallback((range: FollowerRange) => {
        let next = [...followerRanges];
        let index = next.findIndex((c) => c.lower === range.lower && c.upper === range.upper);
        if (index > -1) {
            next.splice(index, 1);
            setFollowerRanges(next);
        }
    }, [followerRanges]);

    const onRemoveDeliverable = useCallback((deliverable: DeliverableWithCount) => {
        let next = [...deliverables];
        let index = next.findIndex((c) => c.count === deliverable.count && c.deliverable === deliverable.deliverable);
        if (index > -1) {
            next.splice(index, 1);
            setDeliverables(next);
        }
    }, [deliverables]);

    const resetProperties = useCallback(() => {
        setAdvancedRequirements(undefined);
        setCampaignTitle("");
        setPlatform(Platform.YOUTUBE);
        setNoInfluencers("1");
        setCategories([]);
        setFollowerRanges([]);
        setPayout(undefined);
        setBrand(undefined);
    }, []);

    const computedCampaign = useMemo(() => {
        let location = {
            country: advancedRequirements?.country,
            city: advancedRequirements?.city
        }

        let campaign = new Campaign({
            uid: user.sub,
            Name: campaignTitle,
            Goals: promotionGoal,
            Platform: platform,
            CampaignStatus: CampaignStatus.DRAFT,
            NoofInfleuncer: parseInt(noInfluencers),
            Categories: categories,
            FollowerRanges: followerRanges.map((r) => JSON.stringify(r)),
            Payout: JSON.stringify(payout),
            Deliverables: deliverables.map((d) => JSON.stringify(d)),
            Brand: brand,
            minAge: advancedRequirements ? advancedRequirements.age.from : undefined,
            maxAge: advancedRequirements ? advancedRequirements.age.to : undefined,
            Location: location.country || location.city ? JSON.stringify(location) : undefined,
            Language: advancedRequirements ? advancedRequirements.language : undefined,
        });

        return campaign;
    }, [advancedRequirements, brand, campaignTitle, categories, deliverables, followerRanges, noInfluencers, payout, platform, promotionGoal, user.sub]);

    const validateCampaign = useCallback(() => {
        let nextErrs: any = {};
        let campaign = computedCampaign;

        if (!Validators.isCampaignName(campaign.Name || "")) {
            nextErrs.campaignTitle = __tr("errorInvalidCampaignTitle");
        }
        if (!promotionGoal) {
            nextErrs.promotionGoal = __tr("errorChooseValidPromotionGoal");
        }
        if (!campaign.NoofInfleuncer || campaign.NoofInfleuncer <= 0) {
            nextErrs.noInfluencers = __tr("errorInvalidNoInfluencers");
        }
        if (categories.length === 0) {
            nextErrs.categories = __tr("errorInvalidCategories");
        }
        if (followerRanges.length === 0) {
            nextErrs.followerRanges = __tr("errorInvalidFollowerRange");
        }
        if (deliverables.length === 0) {
            nextErrs.deliverables = __tr("errorInvalidDeliverables");
        }
        if (!payout) {
            nextErrs.payout = __tr("errorInvalidPayout");
        }
        if (!brand) {
            nextErrs.brand = __tr("errorInvalidBrand");
        }
        setErrors(nextErrs);
        return nextErrs;
    }, [brand, categories.length, computedCampaign, deliverables.length, followerRanges.length, payout, promotionGoal]);

    const saveCampaignAsDraft = useCallback(async () => {
        let campaign = computedCampaign;
        let nextErrors = validateCampaign();
        if (Object.keys(nextErrors).length > 0) {
            toast.warn(__tr("fixErrors"));
            return;
        }

        try {
            setBusy(true);
            let created = await DataStore.save(campaign);
            if (created) {
                dispatch(appendCampaign(created));
                toast.success(__tr("savedAsDraft"));
                resetProperties();
                onClose();
            }
        } catch (error) {
            toast.warn((error as any).message);
        }
        finally {
            setBusy(false);
        }
    }, [computedCampaign, dispatch, onClose, resetProperties, validateCampaign]);

    const postCampaign = useCallback(async () => {

        let nextErrors = validateCampaign();
        if (Object.keys(nextErrors).length > 0) {
            toast.warn(__tr("fixErrors"));
            return;
        }

        let campaign = Campaign.copyOf(computedCampaign, (c) => {
            c.CampaignStatus = CampaignStatus.SUBMITTED
        });

        try {
            setBusy(true);
            let created = await DataStore.save(campaign);
            if (created) {
                dispatch(appendCampaign(created));
                toast.success(__tr("campaignPosted"));
                resetProperties();
                onClose();
            }
        } catch (error) {
            toast.warn((error as any).message);
        }
        finally {
            setBusy(false);
        }
    }, [computedCampaign, dispatch, onClose, resetProperties, validateCampaign]);

    return <Dialog {...props}>
        <DialogTitle>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h6">{__tr("newCampaign")}</Typography>
                <IconButton onClick={onClose}>
                    <MdClose />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent dividers>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={4}>
                    <InputLabel>{__tr("campaignTitle")}*</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        name="campaignTitle"
                        value={campaignTitle}
                        onChange={(ev) => setCampaignTitle(ev.currentTarget.value)}
                        helperText={errors.campaignTitle}
                        error={errors.campaignTitle} />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>{__tr("promotionGoal")}*</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        name="promotionGoal"
                        placeholder="e.g Product Review"
                        value={promotionGoal}
                        inputRef={(el) => promotionGoalPickerAnchor.current = el}
                        InputProps={{ endAdornment: <MdArrowDropDown size={24} /> }}
                        onFocus={onOpenPromotionGoal} />
                    <Popover
                        elevation={2}
                        open={goalOpen}
                        onClose={onClosePromotionGoal}
                        anchorEl={promotionGoalPickerAnchor.current}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}>
                        <PromotionGoalsPicker
                            items={promotionGoal ? [promotionGoal] : []}
                            onChange={(goals) => setPromotionGoal(goals[0])} />
                    </Popover>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="body1">{__tr("questionInfluencerRequirement")}</Typography>
                        <Box>
                            <TextTransformNoneButton
                                variant="text"
                                color="primary"
                                endIcon={<MdArrowDropDown size={24} />}
                                onClick={(ev) => setAdvancedFilterAnchor(ev.currentTarget)}>
                                {__tr("advanced")}
                            </TextTransformNoneButton>
                            {advancedRequirements && <TextTransformNoneButton
                                variant="text"
                                color="secondary"
                                endIcon={<MdClose size={24} />}
                                onClick={() => setAdvancedRequirements(undefined)}>
                                {__tr("resetFilter")}
                            </TextTransformNoneButton>
                            }
                        </Box>
                        <Popover
                            elevation={2}
                            open={Boolean(advancedFilterAnchor)}
                            onClose={() => setAdvancedFilterAnchor(undefined)}
                            anchorEl={advancedFilterAnchor}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}>
                            <Box maxHeight="420px">
                                <InfluencerRequirementAdvancedFilter requirements={advancedRequirements} onChange={setAdvancedRequirements} />
                            </Box>
                        </Popover>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>{__tr("platform")}*</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-around">
                        <RadioGroup row onChange={(ev, v) => setPlatform(v as Platform)} value={platform}>
                            <FormControlLabel label="Instagram" control={<Radio value={Platform.INSTAGRAM} color="primary" />} />
                            <FormControlLabel label="Youtube" control={<Radio value={Platform.YOUTUBE} color="primary" />} />
                        </RadioGroup>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>{__tr("category")}*</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <Box onClick={onOpenCategory} style={{ borderRadius: '4px', border: `1px solid ${grey[400]}`, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Box flexGrow={1} style={{ height: '40px', overflowX: 'auto', scrollbarWidth: 'thin', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} >
                            {
                                categories.map((c) => {
                                    return <Chip size="small" variant="outlined" color="primary" label={c} clickable onDelete={() => onRemoveCategory(c)} style={{ marginLeft: '4px' }} />
                                })
                            }
                        </Box>
                        <IconButton size="small">
                            <MdArrowDropDown size={24} />
                        </IconButton>
                    </Box>
                    <Popover
                        elevation={2}
                        open={Boolean(categoryPickerAnchor)}
                        onClose={onCloseCategory}
                        anchorEl={categoryPickerAnchor}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}>
                        <Box maxHeight="320px">
                            <CategoryPicker items={categories} onChange={setCategories} />
                        </Box>
                    </Popover>
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>{__tr("followersRange")}*</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <Box onClick={onOpenFollowerRange} style={{ borderRadius: '4px', border: `1px solid ${grey[400]}`, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Box flexGrow={1} style={{ height: '40px', overflowX: 'auto', scrollbarWidth: 'thin', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} >
                            {
                                followerRanges.map((c) => {
                                    return <Chip size="small" variant="outlined" color="primary" label={c.label || ''} clickable onDelete={() => onRemoveFollowerRange(c)} style={{ marginLeft: '4px' }} />
                                })
                            }
                        </Box>
                        <IconButton size="small">
                            <MdArrowDropDown size={24} />
                        </IconButton>
                    </Box>
                    <Popover
                        elevation={2}
                        open={Boolean(followerRangePickerAnchor)}
                        onClose={onCloseFollowerRange}
                        anchorEl={followerRangePickerAnchor}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}>
                        <Box maxHeight="320px">
                            <FollowerRangePicker
                                onUseCustom={requireCustomFollowerRange}
                                ranges={followerRanges}
                                onChange={(val) => { setUseCustomFollowerRange(false); setFollowerRanges(val) }} />
                        </Box>
                    </Popover>
                </Grid>
                {useCustomFollowerRange && <>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                        <Box paddingY={.5} paddingX={2}>
                            <StyledSlider
                                min={25}
                                max={900}
                                step={25}
                                value={customRange}
                                valueLabelDisplay="auto"
                                color="primary"
                                onChange={(ev, values) => setCustomRange(values as number[])} />
                        </Box>
                    </Grid>
                </>}
                <Grid item xs={4}>
                    <InputLabel>{__tr("numberOfInfluencers")}*</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        name="numberOfInfluencers"
                        error={errors.noOfInfluencer}
                        helperText={errors.noOfInfluencer}
                        value={noInfluencers}
                        onChange={(ev) => setNoInfluencers(ev.currentTarget.value)} />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>{__tr("deliverables")}*</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <Box onClick={onOpenDeliverables} style={{ borderRadius: '4px', border: `1px solid ${grey[400]}`, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Box flexGrow={1} style={{ height: '40px', overflowX: 'auto', scrollbarWidth: 'thin', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} >
                            {
                                deliverables.map((c) => {
                                    return <Chip size="small" variant="outlined" color="primary" label={`${c.count} ${__tr(c.deliverable.toLowerCase())}`} clickable onDelete={() => onRemoveDeliverable(c)} style={{ marginLeft: '4px' }} />
                                })
                            }
                        </Box>
                        <IconButton size="small">
                            <MdArrowDropDown size={24} />
                        </IconButton>
                    </Box>
                    <Popover
                        elevation={2}
                        open={Boolean(deliverablePickerAnchor)}
                        onClose={onCloseDeliverables}
                        anchorEl={deliverablePickerAnchor}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}>
                        <Box maxHeight="320px">
                            <DeliverablePicker
                                platform={platform}
                                deliverables={deliverables}
                                onChange={setDeliverables} />
                        </Box>
                    </Popover>
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>{__tr("payout")}</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-around">
                        <RadioGroup row onChange={(ev, v) => setPayoutType(v as PayoutType)} value={payoutType}>
                            <FormControlLabel label="Barter" control={<Radio color="primary" />} value={PayoutType.BARTER} />
                            <FormControlLabel label="Fixed Pay" control={<Radio color="primary" />} value={PayoutType.FIXED} />
                            <FormControlLabel label="Variable Pay" control={<Radio color="primary" />} value={PayoutType.VARIABLE} />
                        </RadioGroup>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <PayoutBuilder type={payoutType} payout={payout} onChange={setPayout} />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>{__tr("brandDetails")}*</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        name="brandDetails"
                        value={brand?.name}
                        inputRef={(el) => brandPickerAnchor.current = el}
                        InputProps={{ endAdornment: <MdArrowDropDown size={24} /> }}
                        onFocus={onOpenBrands} />
                    <Popover
                        elevation={2}
                        open={brandPickerOpen}
                        onClose={onCloseBrands}
                        anchorEl={brandPickerAnchor.current}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                        <Box height="320px">
                            <BrandPicker brand={brand} onChange={setBrand} />
                        </Box>
                    </Popover>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center", margin: '4px 0px' }}>
            <TextTransformNoneButton variant="outlined" color="default" size="small" onClick={saveCampaignAsDraft} disabled={busy}>{__tr("saveDraft")}</TextTransformNoneButton>
            <TextTransformNoneButton variant="contained" color="primary" size="small" onClick={postCampaign} disabled={busy}>{__tr("postCampaign")}</TextTransformNoneButton>
        </DialogActions>
    </Dialog>
}