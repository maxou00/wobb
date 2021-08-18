import { Avatar, Button, IconButton, InputBase, Toolbar, Typography, withStyles } from "@material-ui/core";
import { AttachFile, Close, EmojiEmotions, ExpandLessRounded, ExpandMore, ExpandMoreRounded, Gif, ImageSharp, MoreHoriz, Send, Videocam, VideocamSharp } from "@material-ui/icons";
import { useState } from "react";
import styles from "../styles/Chatbox.module.scss";

export function Chatbox() {
    const [inputExpanded, setInputExpanded] = useState(false);

    return <div className={styles.chatbox}>
        <div className={styles.header}>
            <div className={styles.participant}>
                <Avatar className={styles.participantAvatar} />
                <div className={styles.text}>
                    <h5 className={styles.fullName}>Lakshman N L</h5>
                    <p className={styles.lastActivity}>Online 6 hours ago.</p>
                </div>
            </div>
            <div className={styles.actions}>
                <IconButton size="small">
                    <MoreHoriz fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <ExpandMore fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <Close fontSize="small" />
                </IconButton>
            </div>
        </div>
        <div className={styles.scrollableZone}>

        </div>
        <div className={styles.controlsWrapper}>
            <div className={styles.controls}>
                <div className={styles.inputWrapper}>
                    <InputBase
                        className={styles.input}
                        placeholder="Write a message"
                        minRows={1}
                        multiline={true} />
                    <IconButton size="small" onClick={() => setInputExpanded(!inputExpanded)}>
                        {inputExpanded ? <ExpandLessRounded fontSize="small" /> : <ExpandMoreRounded fontSize="small" />}
                    </IconButton>
                </div>
                <div className={styles.btnControls}>
                    <div className={styles.icons}>
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
                    </div>
                    <div className={styles.buttons}>
                        <IconButton color="primary" size="small">
                            <Send fontSize="small"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}