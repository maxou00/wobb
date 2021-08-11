import { Box, Checkbox, Divider, FormControlLabel, Typography } from "@material-ui/core";
import { useCallback, useState } from "react";
import { IconFilter } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";

interface Filter {
    platform: string[];
    payment: string[];
}

export const initialFilter: Filter = {
    platform: [],
    payment: []
}

export function CampaignFilter() {
    const [filter, setFilter] = useState<Filter>(initialFilter);

    const checkOrUncheckPlatform = useCallback((platform: string) => {
        let newFilter = { ...filter };
        if (newFilter.platform.includes(platform)) {
            newFilter.platform = newFilter.platform.filter((p) => p !== platform);
        }
        else {
            newFilter.platform.push(platform);
        }
        setFilter(newFilter);
    }, [filter]);

    const checkOrUnckeckPayment = useCallback((payment: string) => {
        let newFilter = { ...filter };
        if (newFilter.payment.includes(payment)) {
            newFilter.payment = newFilter.payment.filter((p) => p !== payment);
        }
        else {
            newFilter.payment.push(payment);
        }
        setFilter(newFilter);
    }, [filter]);

    return <Box>
        <Box marginBottom={1} padding={2} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box marginRight={1} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Box marginRight={1}>
                    <IconFilter size={24} />
                </Box>
                <Typography variant="h6" style={{ textTransform: 'uppercase' }}>{__tr("filter")}</Typography>
            </Box>
            <TextTransformNoneButton size="small" variant="text" color="primary">{__tr("clearAll")}</TextTransformNoneButton>
        </Box>
        <Box marginTop={1}>
            <Box padding={2}>
                <Box marginBottom={2}>
                    <Typography variant="body1" style={{ textTransform: 'uppercase', fontWeight: 500 }}>{__tr("platform")}</Typography>
                </Box>
                <Box paddingX={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
                    <FormControlLabel
                        control={<Checkbox checked={filter.platform.includes("instagram")} onChange={(ev) => checkOrUncheckPlatform("instagram")} />}
                        label="Instagram" />
                    <FormControlLabel
                        control={<Checkbox checked={filter.platform.includes("youtube")} onChange={(ev) => checkOrUncheckPlatform("youtube")} />}
                        label="Youtube" />
                </Box>
            </Box>
            <Divider />
            <Box padding={2}>
                <Box marginBottom={2}>
                    <Typography variant="body1" style={{ textTransform: 'uppercase', fontWeight: 500 }}>{__tr("payment")}</Typography>
                </Box>
                <Box paddingX={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
                    <FormControlLabel
                        control={<Checkbox checked={filter.payment.includes("cash")} onChange={(ev) => checkOrUnckeckPayment("cash")} />}
                        label={__tr("cash")} />
                    <FormControlLabel
                        control={<Checkbox checked={filter.payment.includes("barter")} onChange={(ev) => checkOrUnckeckPayment("barter")} />}
                        label={__tr("barter")} />
                    <FormControlLabel
                        control={<Checkbox checked={filter.payment.includes("wobbCoins")} onChange={(ev) => checkOrUnckeckPayment("wobbCoins")} />}
                        label={__tr("wobbCoins")} />
                </Box>
            </Box>
        </Box>
    </Box>
}