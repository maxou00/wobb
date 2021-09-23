import { css } from "@emotion/css";
import { Box, InputAdornment, MenuItem, TextField, Typography } from "@material-ui/core";
import { useCallback, useState } from "react";
import { __tr } from "../i18n";
import { StyledSlider } from "./StyledSlider";

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    `
}

export interface InfluencerFilter {
    sortBy?: string;
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

export const initialFilter: InfluencerFilter = {
    followerRange: {
        min: 7000
    },
    age: 21,
    engagementRate: 1.5
}

interface FilterUIProps {
    enableSorting?: boolean;
}

export function InfluencerFilterUi(props: FilterUIProps) {
    const [filter, setFilter] = useState<InfluencerFilter>(initialFilter);

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

    const onSortParameterChange = useCallback((val: string) => {
        let abs = {
            ...filter
        }
        abs.sortBy = val;
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


    return <Box paddingX={2} className={styles.root}>
        {props.enableSorting && <Box marginY={2} width="100%">
            <Box marginBottom={1}>
                <Typography variant="body2">{__tr("sortBy")}</Typography>
            </Box>
            <TextField
                size="small"
                select
                value={filter.sortBy}
                onChange={(ev) => onSortParameterChange(ev.currentTarget.value)}
                variant="outlined"
                placeholder="e.g Engagement Rate"
                fullWidth>
                <MenuItem value="engagementRate">{__tr("engagementRate")}</MenuItem>
            </TextField>
        </Box>}
        <Box marginY={2} width="100%">
            <Box marginBottom={2}>
                <Typography variant="body2">{__tr("followersRange")}</Typography>
            </Box>
            <StyledSlider
                min={1000}
                max={1000000}
                track="inverted"
                marks={[{ value: 1000, label: "1K" }, { value: 1000000, label: "1M+" }]}
                value={filter.followerRange.min}
                onChange={(ev, val) => onMinFollowerChange(val as number)} />
        </Box>
        <Box width="100%" marginY={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <Box marginRight={.5}>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="e.g. 5000"
                    type="number"
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
        <Box width="100%" marginY={2}>
            <Box marginBottom={1}>
                <Typography variant="body2">{__tr("engagementRate")}</Typography>
            </Box>
            <StyledSlider
                min={1}
                max={5}
                track="inverted"
                valueLabelDisplay="auto"
                marks={[{ value: 1, label: "1%" }, { value: 5, label: "5%+" }]}
                value={filter.engagementRate}
                onChange={(ev, val) => onEngagementRateChange(val as number)} />
        </Box>
        <Box width="100%" marginY={2}>
            <Box marginBottom={1}>
                <Typography variant="body2">{__tr("category")}</Typography>
            </Box>
            <TextField
                size="small"
                select
                value={filter.category}
                onChange={(ev) => onCategoryChange(ev.currentTarget.value)}
                variant="outlined"
                placeholder="e.g Food"
                fullWidth>
                <MenuItem value="food">Food</MenuItem>
            </TextField>
        </Box>
        <Box width="100%" marginY={4}>
            <Box marginBottom={1}>
                <Typography variant="body2">{__tr("gender")}</Typography>
            </Box>
            <TextField
                select
                value={filter.gender}
                onChange={(ev) => onGenderChange(ev.currentTarget.value)}
                size="small"
                variant="outlined"
                placeholder="e.g Male"
                fullWidth>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
            </TextField>
        </Box>
        <Box width="100%" marginY={2}>
            <Box marginBottom={1}>
                <Typography variant="body2">{__tr("age")}</Typography>
            </Box>
            <StyledSlider
                min={19}
                max={45}
                value={filter.age}
                track="inverted"
                valueLabelDisplay="auto"
                marks={[{ value: 19, label: "19" }, { value: 45, label: "45+" }]}
                onChange={(ev, val) => onAgeChange(val as number)} />
        </Box>
        <Box width="100%" marginY={2}>
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
        <Box width="100%" marginY={2}>
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
}