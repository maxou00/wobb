import { Avatar, Box, Dialog, DialogContent, DialogProps, DialogTitle, IconButton, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { useCallback } from "react";
import { MdClose } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { FormattedMessageBox } from "./FormattedMessageBox";

interface Props extends DialogProps {

}

export function SendMessageToApplicants(props: Props) {

    const onClose = useCallback(() => {
        if (props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [props]);

    return <Dialog {...props}>
        <DialogTitle>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box>
                    <Typography variant="h6">Message</Typography>
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
            <Box padding={1}>
                <FormattedMessageBox />
            </Box>
            <Box padding={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <TextTransformNoneButton variant='contained' color="primary" size="large">Message Selected</TextTransformNoneButton>
            </Box>
        </DialogContent>
    </Dialog>
}