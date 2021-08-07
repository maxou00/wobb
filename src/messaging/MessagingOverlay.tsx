import { Backdrop, withStyles } from "@material-ui/core";
import { PropsWithChildren } from "react";
import styles from "../styles/MessagingOverlay.module.scss";
import { Chatbox } from "./Chatbox";
import { ThreadList } from "./ThreadList";

const TransparentBackdrop = withStyles({
    root: {
        background: 'transparent',
        zIndex: 50
    }
})(Backdrop);

export function MessagingOverlay(props: PropsWithChildren<{}>) {
    return <TransparentBackdrop open={true}>
        <div className={styles.messagingOverlay}>
            <div className={styles.threadListWrapper}>
                <ThreadList />
            </div>
            <div className={styles.activeChatBoxes}>
                <div className={styles.chatBoxWrapper}>
                    <Chatbox />
                </div>
                <div className={styles.chatBoxWrapper}>
                    <Chatbox />
                </div>
                <div className={styles.chatBoxWrapper}>
                    <Chatbox />
                </div>
            </div>
        </div>
    </TransparentBackdrop>
}