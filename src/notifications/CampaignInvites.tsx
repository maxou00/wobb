import { css } from "@emotion/css";
import { Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { Box, List } from "@material-ui/core";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";

function Invite() {
    return <ListItem>
        <ListItemAvatar>
            <Avatar />
        </ListItemAvatar>
        <ListItemText
            primary="Nike"
            secondary="Coca Cola" />
        <ListItemSecondaryAction>
            <TextTransformNoneButton size="small" color="primary" variant="outlined">{__tr("accept")}</TextTransformNoneButton>
            <TextTransformNoneButton size="small" color="primary" variant="outlined">{__tr("reject")}</TextTransformNoneButton>
        </ListItemSecondaryAction>
    </ListItem>
}

export function CampaignInvites() {
    return <Box>
        <List>
            <Invite />
            <Invite />
        </List>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <TextTransformNoneButton variant="text" color="primary">{__tr("viewMore")}</TextTransformNoneButton>
        </Box>
    </Box>
}