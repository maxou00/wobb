import { Avatar, Box, Dialog, DialogContent, DialogProps, DialogTitle, Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useCallback } from "react";
import { MdClose } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";

interface Props extends DialogProps { }

export function MarkCampaignAsCompleteDialog(props: Props) {

    const onClose = useCallback(() => {
        if (props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [props]);

    return <Dialog {...props}>
        <DialogTitle>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box>
                    <Typography variant="h6">Mark As Complete</Typography>
                </Box>
                <Box>
                    <IconButton onClick={onClose}>
                        <MdClose size={24} />
                    </IconButton>
                </Box>
            </Box>
        </DialogTitle>
        <DialogContent dividers>
            <Box padding={1} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                                <Box padding={1}>
                                    <Avatar />
                                </Box>
                                <Typography variant="body1" style={{fontWeight: 500}}>Influname</Typography>
                            </Box>
                            <Box>
                                <Rating
                                    defaultValue={1}
                                    precision={1} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            multiline
                            variant="outlined"
                            minRows={3}
                            maxRows={6}
                            fullWidth
                            placeholder="Write a review about this influencer" />
                    </Grid>
                </Grid>
            </Box>
            <Box padding={1} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                                <Box padding={1}>
                                    <Avatar />
                                </Box>
                                <Typography variant="body1" style={{fontWeight: 500}}>Influname</Typography>
                            </Box>
                            <Box>
                                <Rating
                                    defaultValue={1}
                                    precision={1} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            multiline
                            variant="outlined"
                            minRows={3}
                            maxRows={6}
                            fullWidth
                            placeholder="Write a review about this influencer" />
                    </Grid>
                </Grid>
            </Box>
            <Box padding={1} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                                <Box padding={1}>
                                    <Avatar />
                                </Box>
                                <Typography variant="body1" style={{fontWeight: 500}}>Influname</Typography>
                            </Box>
                            <Box>
                                <Rating
                                    defaultValue={1}
                                    precision={1} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            multiline
                            variant="outlined"
                            minRows={3}
                            maxRows={6}
                            fullWidth
                            placeholder="Write a review about this influencer" />
                    </Grid>
                </Grid>
            </Box>
            <Box padding={1} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                                <Box padding={1}>
                                    <Avatar />
                                </Box>
                                <Typography variant="body1" style={{fontWeight: 500}}>Influname</Typography>
                            </Box>
                            <Box>
                                <Rating
                                    defaultValue={1}
                                    precision={1} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            multiline
                            variant="outlined"
                            minRows={3}
                            maxRows={6}
                            fullWidth
                            placeholder="Write a review about this influencer" />
                    </Grid>
                </Grid>
            </Box>
            <Box padding={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <TextTransformNoneButton variant='contained' color="primary" size="large">Mark As Complete</TextTransformNoneButton>
            </Box>
        </DialogContent>
    </Dialog>
}