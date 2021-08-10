import { Box, Button, Divider, InputAdornment, MenuItem, TextField, Typography } from "@material-ui/core";
import { useCallback, useState } from "react";
import { IconFilter } from "../components/Icons";
import { InvertedSlider } from "../components/InvertedSlider";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";

interface Filter {
    followerRange: {
        min: number;
        max?: number;
    }
    engagementRate: number;
    category?: string;
    gender?: string;
    age: number;
    location?: string;
    language?: string;
}

export const initialFilter: Filter = {
    followerRange: {
        min: 7000
    },
    age: 21,
    engagementRate: 1.5
}

export function ApplicantsFilter() {
    const [filter, setFilter] = useState<Filter>(initialFilter);

    const onMinFollowerChange = useCallback((val: number | string) => {
        let abs = {
            ...filter
        }
        abs.followerRange.min = parseInt(`${val}`) || 1000;
        setFilter(abs);
    }, [filter]);

    const onMaxFollowerChange = useCallback((val: number | string) => {
        let abs = {
            ...filter
        }
        abs.followerRange.max = parseInt(`${val}`) || 1000000;
        setFilter(abs);
    }, [filter]);

    const onEngagementRateChange = useCallback((val: number) => {
        let abs = {
            ...filter
        }
        abs.engagementRate = val;
        setFilter(abs);
    }, [filter]);

    const onCategoryChange = useCallback((val: string) => {
        let abs = {
            ...filter
        }
        abs.category = val;
        setFilter(abs);
    }, [filter]);

    const onGenderChange = useCallback((val: string) => {
        let abs = {
            ...filter
        }
        abs.gender = val;
        setFilter(abs);
    }, [filter]);

    const onAgeChange = useCallback((val: number) => {
        let abs = {
            ...filter
        }
        abs.age = val;
        setFilter(abs);
    }, [filter]);

    const onLocationChange = useCallback((val: string) => {
        let abs = {
            ...filter
        }
        abs.location = val;
        setFilter(abs);
    }, [filter]);

    const onLanguageChange = useCallback((val: string) => {
        let abs = {
            ...filter
        }
        abs.language = val;
        setFilter(abs);
    }, [filter]);


    return <Box>
        <Box marginBottom={1} padding={2} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box marginRight={1} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Box marginRight={1}>
                    <IconFilter size={24} />
                </Box>
                <Typography variant="h6" style={{textTransform: 'uppercase'}}>{__tr("filter")}</Typography>
            </Box>
            <TextTransformNoneButton size="small" variant="text" color="primary">{__tr("clearAll")}</TextTransformNoneButton>
        </Box>
        <Divider />
        <Box padding={2}>
            <Box marginY={4}>
                <Box marginBottom={2}>
                    <Typography variant="body2">{__tr("followersRange")}</Typography>
                </Box>
                <Box>
                    <InvertedSlider
                        min={5000}
                        max={100000}
                        value={filter.followerRange.min}
                        maxTitle="1M+"
                        minTitle="1K"
                        onChange={onMinFollowerChange} />
                </Box>
            </Box>
            <Box marginY={4} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Box marginRight={.5}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="e.g. 5000"
                        type="number"
                        value={filter.followerRange.min}
                        onChange={(ev) => onMinFollowerChange(ev.currentTarget.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{__tr("min")}</InputAdornment>
                        }} />
                </Box>
                <Box marginLeft={.5}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        type="number"
                        placeholder="e.g. 10000"
                        value={filter.followerRange.max}
                        onChange={(ev) => onMaxFollowerChange(ev.currentTarget.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{__tr("max")}</InputAdornment>
                        }} />
                </Box>
            </Box>
            <Box marginY={4}>
                <Box marginBottom={1}>
                    <Typography variant="body2">{__tr("engagementRate")}</Typography>
                </Box>
                <InvertedSlider
                    min={1}
                    max={5}
                    maxTitle="5+%"
                    minTitle="1%"
                    value={filter.engagementRate}
                    onChange={onEngagementRateChange} />
            </Box>
            <Box marginY={4}>
                <Box marginBottom={1}>
                    <Typography variant="body2">{__tr("category")}</Typography>
                </Box>
                <TextField
                    size="small"
                    select
                    value={filter.category}
                    onChange={(ev) => onCategoryChange(ev.currentTarget.value)}
                    variant="outlined"
                    fullWidth>
                    <MenuItem value="food">Food</MenuItem>
                </TextField>
            </Box>
            <Box marginY={4}>
                <Box marginBottom={1}>
                    <Typography variant="body2">{__tr("gender")}</Typography>
                </Box>
                <TextField
                    select
                    value={filter.gender}
                    onChange={(ev) => onGenderChange(ev.currentTarget.value)}
                    size="small"
                    variant="outlined"
                    fullWidth>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                </TextField>
            </Box>
            <Box marginY={4}>
                <Box marginBottom={1}>
                    <Typography variant="body2">{__tr("age")}</Typography>
                </Box>
                <InvertedSlider
                    min={19}
                    max={45}
                    value={filter.age}
                    maxTitle="45+"
                    minTitle="19"
                    onChange={onAgeChange} />
            </Box>
            <Box marginY={4}>
                <Box marginBottom={1}>
                    <Typography variant="body2">{__tr("location")}</Typography>
                </Box>
                <TextField
                    size="small"
                    select
                    value={filter.location}
                    onChange={(ev) => onLocationChange(ev.currentTarget.value)}
                    variant="outlined"
                    fullWidth>
                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                    <MenuItem value="New Delhi">New Delhi</MenuItem>
                </TextField>
            </Box>
            <Box marginY={4}>
                <Box marginBottom={1}>
                    <Typography variant="body2">{__tr("language")}</Typography>
                </Box>
                <TextField
                    size="small"
                    select
                    value={filter.language}
                    onChange={(ev) => onLanguageChange(ev.currentTarget.value)}
                    variant="outlined"
                    fullWidth>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                </TextField>
            </Box>
        </Box>
    </Box>
}