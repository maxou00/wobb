import { Box, FormControlLabel, Grid, InputLabel, Popover, Radio, RadioGroup, TextField, Typography } from "@material-ui/core";
import { useRef } from "react";
import { useCallback, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
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


export function CreateCampaign() {
    const [platform, setPlatform] = useState("instagram");
    const [payoutType, setPayoutType] = useState("barterPay");

    const promotionGoalPickerAnchor = useRef<HTMLInputElement | null>();
    const followerRangePickerAnchor = useRef<HTMLInputElement | null>();
    const categoryPickerAnchor = useRef<HTMLInputElement | null>();
    const deliverablePickerAnchor = useRef<HTMLInputElement | null>();
    const brandPickerAnchor = useRef<HTMLInputElement | null>();

    const [advancedFilterAnchor, setAdvancedFilterAnchor] = useState<HTMLButtonElement>();

    const [goalOpen, setGoalOpen] = useState(false);
    const [followerRangeOpen, setFollowerRangeOpen] = useState(false);
    const [useCustomFollowerRange, setUseCustomFollowerRange] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [deliverablePickerOpen, setDeliverablePickerOpen] = useState(false);
    const [brandPickerOpen, setBrandPickerOpen] = useState(false);

    const onOpenPromotionGoal = useCallback(() => {
        promotionGoalPickerAnchor.current?.blur();
        setGoalOpen(true);
    }, [promotionGoalPickerAnchor]);

    const onClosePromotionGoal = useCallback(() => {
        promotionGoalPickerAnchor.current?.blur();
        setGoalOpen(false);
    }, [promotionGoalPickerAnchor]);

    const onOpenFollowerRange = useCallback(() => {
        followerRangePickerAnchor.current?.blur();
        setFollowerRangeOpen(true);
    }, [followerRangePickerAnchor]);

    const onCloseFollowerRange = useCallback(() => {
        followerRangePickerAnchor.current?.blur();
        setFollowerRangeOpen(false);
    }, [followerRangePickerAnchor]);

    const requireCustomFollowerRange = useCallback(() => {
        onCloseFollowerRange();
        setUseCustomFollowerRange(true);
    }, [onCloseFollowerRange]);

    const onOpenCategory = useCallback(() => {
        categoryPickerAnchor.current?.blur();
        setCategoryOpen(true);
    }, [categoryPickerAnchor]);

    const onCloseCategory = useCallback(() => {
        categoryPickerAnchor.current?.blur();
        setCategoryOpen(false);
    }, [categoryPickerAnchor]);

    const onOpenDeliverables = useCallback(() => {
        deliverablePickerAnchor.current?.blur();
        setDeliverablePickerOpen(true);
    }, [deliverablePickerAnchor]);

    const onCloseDeliverables = useCallback(() => {
        deliverablePickerAnchor.current?.blur();
        setDeliverablePickerOpen(false);
    }, [deliverablePickerAnchor]);

    const onOpenBrands = useCallback(() => {
        brandPickerAnchor.current?.blur();
        setBrandPickerOpen(true);
    }, [brandPickerAnchor]);

    const onCloseBrands = useCallback(() => {
        brandPickerAnchor.current?.blur();
        setBrandPickerOpen(false);
    }, [brandPickerAnchor]);

    return <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={4}>
            <InputLabel>{__tr("campaignTitle")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField size="small" variant="outlined" fullWidth name="campaignTitle" />
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
                inputRef={(el) => promotionGoalPickerAnchor.current = el}
                InputProps={{ endAdornment: <MdArrowDropDown size={24} /> }}
                onFocus={onOpenPromotionGoal} />
            <Popover
                elevation={2}
                open={goalOpen}
                onClose={onClosePromotionGoal}
                anchorEl={promotionGoalPickerAnchor.current}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <PromotionGoalsPicker />
            </Popover>
        </Grid>
        <Grid item xs={12}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Typography variant="body1">{__tr("questionInfluencerRequirement")}</Typography>
                <TextTransformNoneButton
                    variant="text"
                    color="primary"
                    endIcon={<MdArrowDropDown size={24} />}
                    onClick={(ev) => setAdvancedFilterAnchor(ev.currentTarget)}>
                    {__tr("advanced")}
                </TextTransformNoneButton>
                <Popover
                    elevation={2}
                    open={Boolean(advancedFilterAnchor)}
                    onClose={() => setAdvancedFilterAnchor(undefined)}
                    anchorEl={advancedFilterAnchor}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                    <InfluencerRequirementAdvancedFilter />
                </Popover>
            </Box>
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("platform")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-around">
                <RadioGroup row onChange={(ev, v) => setPlatform(v)} value={platform}>
                    <FormControlLabel label="Instagram" control={<Radio value="instagram" color="primary" />} />
                    <FormControlLabel label="Youtube" control={<Radio value="youtube" color="primary" />} />
                </RadioGroup>
            </Box>
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("category")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField
                size="small"
                variant="outlined"
                fullWidth
                name="category"
                inputRef={(el) => categoryPickerAnchor.current = el}
                InputProps={{ endAdornment: <MdArrowDropDown size={24} /> }}
                onFocus={(onOpenCategory)} />
            <Popover
                elevation={2}
                open={categoryOpen}
                onClose={onCloseCategory}
                anchorEl={categoryPickerAnchor.current}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <CategoryPicker />
            </Popover>
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("followersRange")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField
                size="small"
                variant="outlined"
                fullWidth
                name="followersRange"
                InputProps={{ endAdornment: <MdArrowDropDown size={24} /> }}
                inputRef={(el) => followerRangePickerAnchor.current = el}
                onFocus={onOpenFollowerRange} />
            <Popover
                elevation={2}
                open={followerRangeOpen}
                onClose={onCloseFollowerRange}
                anchorEl={followerRangePickerAnchor.current}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <FollowerRangePicker onUseCustom={requireCustomFollowerRange} />
            </Popover>
        </Grid>
        {useCustomFollowerRange && <>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
                <Box paddingY={.5}>
                    <StyledSlider
                        min={0}
                        max={100}
                        value={[10, 60]}
                        color="primary" />
                </Box>
            </Grid>
        </>}
        <Grid item xs={4}>
            <InputLabel>{__tr("numberOfInfluencers")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField size="small" variant="outlined" fullWidth name="numberOfInfluencers" />
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("deliverables")}*</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <TextField
                size="small"
                variant="outlined"
                fullWidth
                name="deliverables"
                inputRef={(el) => deliverablePickerAnchor.current = el}
                InputProps={{ endAdornment: <MdArrowDropDown size={24} /> }}
                onFocus={onOpenDeliverables} />
            <Popover
                elevation={2}
                open={deliverablePickerOpen}
                onClose={onCloseDeliverables}
                anchorEl={deliverablePickerAnchor.current}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <DeliverablePicker platform={platform} />
            </Popover>
        </Grid>
        <Grid item xs={4}>
            <InputLabel>{__tr("payout")}</InputLabel>
        </Grid>
        <Grid item xs={8}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-around">
                <RadioGroup row onChange={(ev, v) => setPayoutType(v)} value={payoutType}>
                    <FormControlLabel label="Barter" control={<Radio color="primary" />} value="barterPay" />
                    <FormControlLabel label="Fixed Pay" control={<Radio color="primary" />} value="fixedPay" />
                    <FormControlLabel label="Variable Pay" control={<Radio color="primary" />} value="variablePay" />
                </RadioGroup>
            </Box>
        </Grid>
        <Grid item xs={12}>
            <PayoutBuilder type={payoutType} />
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
                inputRef={(el) => brandPickerAnchor.current = el}
                InputProps={{ endAdornment: <MdArrowDropDown size={24} /> }}
                onFocus={onOpenBrands} />
            <Popover
                elevation={2}
                open={brandPickerOpen}
                onClose={onCloseBrands}
                anchorEl={brandPickerAnchor.current}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <BrandPicker />
            </Popover>
        </Grid>
    </Grid>
}