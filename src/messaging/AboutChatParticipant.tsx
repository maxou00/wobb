import { css } from "@emotion/css";
import { Box, Divider, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { MdDelete, MdKeyboardArrowRight, MdVolumeMute } from "react-icons/md";
import { IconDelete, IconMute } from "../components/Icons";
import { CssVariables } from "../css-variables";
import { UserResumeCard } from "../profile/UserResumeCard";

const styles = {
    page: css`
        width: 100%;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    `,

    resume: css`
        width: 100%;
    `,

    content: css`
        border-top: 1px solid ${CssVariables.colorGrayV1};
        width: 100%;
        height: 100%;
    `,

    actions: css`
        width: 100%;
        border-top: 1px solid ${CssVariables.colorGrayV1};
    `
}

export function AboutChatParticipant() {
    return <Box className={styles.page}>
        <Box padding={1} className={styles.resume}>
            <UserResumeCard excludeStats />
        </Box>
        <Box className={styles.content}>
            <List dense >
                <ListItem>
                    <ListItemText
                        primary="Media Shared" />
                    <ListItemSecondaryAction>
                        <IconButton size="small">
                            <MdKeyboardArrowRight size={16} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Box>
        <Box className={styles.actions}>
            <List dense disablePadding>
                <ListItem dense divider>
                    <ListItemIcon>
                        <IconMute size={18} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Mute"
                        primaryTypographyProps={{
                            style: {
                                color: CssVariables.colorError
                            }
                        }} />
                </ListItem>
                <ListItem dense>
                    <ListItemIcon>
                        <IconDelete size={18} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Delete"
                        primaryTypographyProps={{
                            style: {
                                color: CssVariables.colorError
                            }
                        }} />
                </ListItem>
            </List>
        </Box>
    </Box>
}