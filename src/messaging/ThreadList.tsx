import { IconButton, Typography } from "@material-ui/core";
import { Avatar, InputBase } from "@material-ui/core";
import { Edit, ExpandMore, MoreHoriz, Search } from "@material-ui/icons";
import { useState } from "react";
import styles from "../styles/ThreadList.module.scss";

export function ThreadList() {
    const [expanded, setExpanded] = useState(false);

    return <div className={styles.threadList}>
        <div className={styles.header}>
            <div className={styles.titleWrapper}>
                <Avatar src="" alt="User Profile" />
                <Typography variant="h6" className={styles.title}>Messaging</Typography>
            </div>
            <div className={styles.actions}>
                <IconButton size="small">
                    <MoreHoriz fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <Edit fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <ExpandMore fontSize="small" />
                </IconButton>
            </div>
        </div>
        <div className={styles.inputWrapper}>
            <InputBase
                className={styles.inputBase}
                startAdornment={<Search />}
                placeholder="Search messages" />
        </div>
        <ul className={styles.items}>
            <ThreadEntry />
            <ThreadEntry />
            <ThreadEntry />
            <ThreadEntry />
            <ThreadEntry />
            <ThreadEntry />
            <ThreadEntry />
            <ThreadEntry />
            <ThreadEntry />
        </ul>
    </div>
}

export function ThreadEntry() {
    return <li className={styles.threadItem}>
        <Avatar className={styles.avatar} />
        <div className={styles.content}>
            <div className={styles.head}>
                <span className={styles.title}>Kumar Syamala</span>
                <span className={styles.time}>9h:39</span>
            </div>
            <div className={styles.body}>
                <span className={styles.message}>
                    Kumar Syamala: To complete the task you'll need a very deep knowledge of ...
                </span>
                <div className={styles.badgeWrapper}>
                    <span className={styles.badge}>2</span>
                </div>
            </div>
        </div>
    </li>
}