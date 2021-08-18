import { Avatar, Box, Drawer, IconButton, InputBase, Menu, MenuItem, Typography, withStyles } from "@material-ui/core";
import { AttachFile, EmojiEmotions, Gif, ImageSharp } from "@material-ui/icons";
import { useState } from "react";
import { MdClose, MdMoreVert } from "react-icons/md";
import { AppMetadata } from "../components/AppMetadata";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import styles from "../styles/ChatArea.module.scss";
import { AboutChatParticipant } from "./AboutChatParticipant";

const SendButton = withStyles({
    root: {
        borderRadius: 46,
        padding: '4px 16px'
    }
})(TextTransformNoneButton);


export function ChatArea() {
    const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement>();
    const [aboutParticipantOpen, setParticipantOpen] = useState(false);

    return <Box className={styles.wrapper}>
        <Box className={styles.chatbox}>
            <Box className={styles.header}>
                <Box className={styles.participant} onClick={() => setParticipantOpen(true)}>
                    <Avatar className={styles.participantAvatar} />
                    <Box className={styles.text}>
                        <Typography variant="h6" className={styles.fullName}>Lakshman N L</Typography>
                        <span className={styles.lastActivity}>6h ago</span>
                    </Box>
                </Box>
                <Box className={styles.actions}>
                    <IconButton size="small" onClick={(ev) => setMenuAnchor(ev.currentTarget)}>
                        <MdMoreVert size={18} />
                    </IconButton>
                </Box>
            </Box>
            <Box className={styles.scrollableZone}>

            </Box>
            <Box className={styles.controlsWrapper}>
                <Box className={styles.controls}>
                    <Box className={styles.inputWrapper}>
                        <InputBase
                            className={styles.input}
                            placeholder="Write a message"
                            minRows={2}
                            maxRows={10}
                            multiline={true} />
                    </Box>
                    <Box className={styles.btnControls}>
                        <Box className={styles.icons}>
                            <IconButton size="small" className={styles.icon}>
                                <ImageSharp fontSize="small" />
                            </IconButton>
                            <IconButton size="small" className={styles.icon}>
                                <AttachFile fontSize="small" />
                            </IconButton>
                            <IconButton size="small" className={styles.icon}>
                                <Gif fontSize="small" />
                            </IconButton>
                            <IconButton size="small" className={styles.icon}>
                                <EmojiEmotions fontSize="small" />
                            </IconButton>
                        </Box>
                        <Box className={styles.buttons}>
                            <SendButton color="primary" variant="contained" size="small">Send</SendButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Menu open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(undefined)} anchorEl={menuAnchor} elevation={1}>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Mute</MenuItem>
            </Menu>
        </Box>
        <Box>
            {aboutParticipantOpen && <Box className={styles.about}>
                <Box className={styles.header}>
                    <Typography variant="h6">About</Typography>
                    <IconButton size="small" onClick={() => setParticipantOpen(false)}>
                        <MdClose size={16} />
                    </IconButton>
                </Box>
                <AboutChatParticipant />
            </Box>}
            {
                !aboutParticipantOpen && <Box padding={2}>
                    <AppMetadata />
                </Box>
            }
        </Box>
    </Box>
}