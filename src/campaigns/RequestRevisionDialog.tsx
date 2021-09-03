import { Box, Checkbox, Dialog, DialogContent, DialogProps, DialogTitle, IconButton, List, ListItem, ListItemText, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useCallback, useState } from "react";
import { MdClose } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";

interface Props extends DialogProps { }

export function RequestRevisionDialog(props: Props) {
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState<any>({});

    const onClose = useCallback(() => {
        if (props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [props]);

    const onCommentChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let nextErrs: any = {...errors};
        let value = ev.currentTarget.value;
        setComment(value);
        if(value && !Validators.isContentApproval(comment)) {
            nextErrs.comment = __tr("errorInvalidComment");
        }
        setErrors(nextErrs);
    }, [comment, errors]);

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
                    <List dense>
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
                        name="comment"
                        multiline
                        maxRows={8}
                        minRows={4}
                        placeholder="Detailed Reasons"
                        value={comment}
                        onChange={onCommentChange}
                        error={errors.comment}
                        helperText={errors.comment}/>
                </Box>
            </Box>
            <Box padding={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <TextTransformNoneButton type="submit" variant='contained' color="primary" size="large">Request Revision</TextTransformNoneButton>
            </Box>
        </DialogContent>
    </Dialog>
}