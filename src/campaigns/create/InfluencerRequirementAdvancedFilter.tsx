import { Box, InputLabel, MenuItem, TextField } from "@material-ui/core"
import { StyledSlider } from "../../components/StyledSlider";
import { __tr } from "../../i18n";

export function InfluencerRequirementAdvancedFilter() {

    return <Box width="100%" padding={2}>
        <Box marginY={.5}>
            <InputLabel>{__tr("gender")}</InputLabel>
        </Box>
        <Box marginY={1}>
            <TextField select size="small" placeholder={__tr("gender")} fullWidth variant="outlined">
                <MenuItem value="male">{__tr("male")}</MenuItem>
                <MenuItem value="female">{__tr("female")}</MenuItem>
            </TextField>
        </Box>
        <Box marginY={.5}>
            <InputLabel>{__tr("age")}</InputLabel>
        </Box>
        <Box marginY={1}>
            <StyledSlider
                min={18}
                value={[18, 35]}
                marks={[{value: 18, label: '18'}, {value: 35, label: '35'}, {value: 100, label: '100'}]}
                max={100} />
        </Box>
        <Box marginY={.5}>
            <InputLabel>{__tr("country")}</InputLabel>
        </Box>
        <Box marginY={1}>
            <TextField select fullWidth size="small" variant="outlined" placeholder={__tr("country")}>
                <MenuItem value="INR">India</MenuItem>
            </TextField>
        </Box>
        <Box marginY={.5}>
            <InputLabel>{__tr("city")}</InputLabel>
        </Box>
        <Box marginY={1}>
            <TextField fullWidth size="small" variant="outlined" placeholder={__tr("city")} />
        </Box>
        <Box marginY={.5}>
            <InputLabel>{__tr("language")}</InputLabel>
        </Box>
        <Box marginY={1}>
            <TextField select fullWidth size="small" variant="outlined" placeholder={__tr("language")}>
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="french">French</MenuItem>
            </TextField>
        </Box>
    </Box>
}