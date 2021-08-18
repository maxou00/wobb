import { Box, IconButton, InputBase, List, Typography } from "@material-ui/core";
import { MdSearch } from "react-icons/md";
import { AppMetadata } from "../components/AppMetadata";
import { IconEdit } from "../components/Icons";
import styles from "../styles/ThreadsView.module.scss";
import { AboutChatParticipant } from "./AboutChatParticipant";
import { ChatArea } from "./ChatArea";
import { ThreadEntry } from "./ThreadList";

export function ThreadsView() {
    return <Box className={styles.page}>
        <Box className={styles.threadlist}>
            <Box className={styles.header}>
                <Typography variant="h6">Messaging</Typography>
                <Box className={styles.actions}>
                    <IconButton size="small">
                        <IconEdit size={14} />
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <InputBase
                    className={styles.searchbar}
                    placeholder="Search messages"
                    startAdornment={
                        <MdSearch size={24} />
                    } />
            </Box>
            <Box className={styles.body}>
                <List>
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                    <ThreadEntry />
                </List>
            </Box>
        </Box>
        <Box className={styles.threadcontent}>
            <ChatArea/>
        </Box>
    </Box>
}