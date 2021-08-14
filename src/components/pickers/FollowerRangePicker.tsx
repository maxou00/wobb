import { Box, Checkbox, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import { TextTransformNoneButton } from "../TextTransformNoneButton";
import { __tr } from "../../i18n";

interface Props {
    onUseCustom(): any;
}

export function FollowerRangePicker(props: Props) {
    return <Box>
        <List>
            <ListItem dense>
                <ListItemAvatar>
                    <Checkbox color="primary" size="small" />
                </ListItemAvatar>
                <ListItemText
                    primary="Nano (1K-10K)" />
            </ListItem>
            <ListItem dense>
                <ListItemAvatar>
                    <Checkbox color="primary" size="small" />
                </ListItemAvatar>
                <ListItemText
                    primary="Micro (10K-50K)" />
            </ListItem>
            <ListItem dense>
                <ListItemAvatar>
                    <Checkbox color="primary" size="small" />
                </ListItemAvatar>
                <ListItemText
                    primary="Macro (50K-250K)" />
            </ListItem>
            <ListItem dense divider>
                <ListItemAvatar>
                    <Checkbox color="primary" size="small" />
                </ListItemAvatar>
                <ListItemText
                    primary="Mega (250K+)" />
            </ListItem>
        </List>
        <Box paddingX={2} paddingY={1}>
            <TextTransformNoneButton
                variant="text"
                color="primary"
                size="small"
                startIcon={<MdAdd size={16} />}
                onClick={props.onUseCustom}>
                {__tr("custom")}
            </TextTransformNoneButton>
        </Box>
    </Box>
}