import { css } from "@emotion/css";
import { Box, Grid, MenuItem, Popover, TextField, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IconEdit } from "../components/Icons";
import { AccessLevelPicker } from "../components/pickers/AccessLevelPicker";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";

const styles = {
    header: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 1px solid ${CssVariables.colorGrayV1};
    `
}

interface EditionProps {
    onCancel(): any ;
}

export function EditAccessView(props: EditionProps) {
    const levelInput = useRef<HTMLInputElement>();
    const [campaignPickerOpen, setCampaignPickerOpen] = useState(false);

    const onOpenCampaignPicker = useCallback(() => {
        if (levelInput.current) {
            levelInput.current.blur();
            setCampaignPickerOpen(true);
        }
    }, []);

    const onCloseCampaignPicker = useCallback(() => {
        if (levelInput.current) {
            levelInput.current.blur();
            setCampaignPickerOpen(false);
        }
    }, []);

    return <Box>
        <Box padding={2} className={styles.header}>
            <Box marginX={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <IconEdit size={24} />
            </Box>
            <Typography variant="h6" style={{ textTransform: 'uppercase' }}>Edit Access</Typography>
        </Box>
        <Box padding={4}>
            <Grid component="form" container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="body1" style={{ fontWeight: 500 }}>Email ID</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="email" size="small" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" style={{ fontWeight: 500 }}>Role</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField select size="small" fullWidth variant="outlined">
                        <MenuItem value='owner'>Owner</MenuItem>
                        <MenuItem value='manager'>Manager</MenuItem>
                        <MenuItem value='viewer'>Viewer</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" style={{ fontWeight: 500 }}>Access Level</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        size="small"
                        fullWidth
                        variant="outlined"
                        inputRef={(el) => levelInput.current = el}
                        onFocus={onOpenCampaignPicker}
                        InputProps={{
                            endAdornment: <MdArrowDropDown size={24} />
                        }} />
                </Grid>
                <Popover anchorEl={levelInput.current} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={campaignPickerOpen} onClose={onCloseCampaignPicker} >
                    <AccessLevelPicker />
                </Popover>
                <Grid item xs={12}>
                    <Box padding={2} display="flex" flexDirection='row' alignItems="center" justifyContent="center">
                        <Box marginRight={1}>
                            <TextTransformNoneButton variant="outlined" color="default" size="large" onClick={props.onCancel}>Cancel</TextTransformNoneButton>
                        </Box>
                        <Box marginLeft={1}>
                            <TextTransformNoneButton variant="outlined" color="primary" size="large">Save</TextTransformNoneButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
}