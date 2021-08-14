import { Box, Checkbox, List, ListItem, ListItemAvatar, ListItemText, TextField } from "@material-ui/core";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { TextTransformNoneButton } from "../TextTransformNoneButton";
import { __tr } from "../../i18n";

export function PromotionGoalsPicker() {
    const [adding, setAdding] = useState(false);

    return <Box minWidth="320px">
        <List dense disablePadding>
            <ListItem dense>
                <ListItemAvatar>
                    <Checkbox color="primary" size="small" />
                </ListItemAvatar>
                <ListItemText
                    primary="Product Review" />
            </ListItem>
            <ListItem dense>
                <ListItemAvatar>
                    <Checkbox color="primary" size="small" />
                </ListItemAvatar>
                <ListItemText
                    primary="New Product Launch" />
            </ListItem>
            <ListItem divider dense>
                <ListItemAvatar>
                    <Checkbox color="primary" size="small" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brand anouncement" />
            </ListItem>
        </List>
        {!adding && <Box paddingX={2} paddingY={1}>
            <TextTransformNoneButton
                variant="text"
                color="primary"
                size="small"
                startIcon={<MdAdd size={16} />}
                onClick={() => setAdding(true)}>
                {__tr("custom")}
            </TextTransformNoneButton>
        </Box>}
        {adding && <Box padding={1}>

            <TextField
                size="small"
                variant="outlined"
                fullWidth />

            <Box paddingX={2} paddingY={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Box marginX={1}>
                    <TextTransformNoneButton
                        variant="contained"
                        color="primary"
                        size="small">
                        {__tr("save")}
                    </TextTransformNoneButton>
                </Box>
                <Box marginX={1}>
                    <TextTransformNoneButton
                        variant="outlined"
                        color="default"
                        size="small"
                        onClick={() => setAdding(false)}>
                        {__tr("cancel")}
                    </TextTransformNoneButton>
                </Box>
            </Box>
        </Box>}
    </Box>
}