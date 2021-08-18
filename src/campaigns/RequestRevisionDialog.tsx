import { Box, Checkbox, Dialog, DialogContent, DialogProps, DialogTitle, IconButton, List, ListItem, ListItemText, TextField, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { MdClose } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";

interface Props extends DialogProps { }

export function RequestRevisionDialog(props: Props) {

    const onClose = useCallback(() => {
        if (props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [props]);

    return <Dialog {...props}>
        <DialogTitle>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box>
                    <Typography variant="h6">Request Revision</Typography>
                </Box>
                <Box>
                    <IconButton onClick={onClose}>
                        <MdClose size={24} />
                    </IconButton>
                </Box>
            </Box>
        </DialogTitle>
        <DialogContent dividers>
            <Box>
                <Typography variant="body1">Select reasons for requesting revision</Typography>
                <Box>
                    <List>
                        <ListItem>
                            <Checkbox color="primary" />
                            <ListItemText primary="Content delivered is poor quality" />
                        </ListItem>
                        <ListItem>
                            <Checkbox color="primary" />
                            <ListItemText primary="Content delivered is not as per brief" />
                        </ListItem>
                        <ListItem>
                            <Checkbox color="primary" />
                            <ListItemText primary="The brief has changed from my end" />
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <TextField
                        fullWidth
                        variant="outlined"
                        multiline
                        maxRows={8}
                        minRows={4}
                        placeholder="Detailed Reasons" />
                </Box>
            </Box>
            <Box padding={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <TextTransformNoneButton variant='contained' color="primary" size="large">Request Revision</TextTransformNoneButton>
            </Box>
        </DialogContent>
    </Dialog>
}