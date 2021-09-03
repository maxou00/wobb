import { Avatar, Box, Dialog, DialogContent, DialogProps, DialogTitle, Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { useCallback } from "react";
import { MdClose } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { FormattedMessageBox } from "./FormattedMessageBox";

interface Props extends DialogProps {

}

export function ShareBriefDialog(props: Props) {

    const onClose = useCallback(() => {
        if (props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [props]);

    return <Dialog {...props}>
        <DialogTitle>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box>
                    <Typography variant="h6">Share Brief</Typography>
                </Box>
                <Box>
                    <IconButton onClick={onClose}>
                        <MdClose size={24} />
                    </IconButton>
                </Box>
            </Box>
        </DialogTitle>
        <DialogContent dividers>
            <Box paddingX={1} paddingY={2} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Typography variant="body1">Selected</Typography>
                <Box paddingX={.5}>
                    <AvatarGroup>
                        <Avatar />
                        <Avatar />
                        <Avatar />
                    </AvatarGroup>
                </Box>
                <Typography variant="body1">+5 others</Typography>
            </Box>
            <Box paddingX={1} paddingY={2}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="body1" style={{ fontWeight: 500 }}>1. Reel</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1">Due date</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField 
                            variant="outlined" 
                            type="date" 
                            fullWidth 
                            size="small"
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <FormattedMessageBox />
                    </Grid>
                </Grid>
            </Box>
            <Box paddingX={1} paddingY={2}>
                <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="body1" style={{ fontWeight: 500 }}>2. Static Story</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1">Due date</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField variant="outlined" type="date" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormattedMessageBox />
                    </Grid>
                </Grid>
            </Box>
            <Box paddingX={1} paddingY={2}>
                <Typography variant="body2" style={{ color: CssVariables.colorGrayV2 }}>
                    * Brief has already been shared with some of the users. Would you like to update everyone’s brief or share with only remaining users?
                </Typography>
            </Box>
            <Box paddingX={1} paddingY={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Box padding={.5}>
                    <TextTransformNoneButton variant='outlined' color="default" size="large">Share brief for all(5) </TextTransformNoneButton>
                </Box>
                <Box padding={.5}>
                    <TextTransformNoneButton variant='contained' color="primary" size="large">Share brief to remaining(3)</TextTransformNoneButton>
                </Box>
            </Box>
        </DialogContent>
    </Dialog>
}