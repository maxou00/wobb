import { Box, Typography } from "@material-ui/core";
import { useUrlParam, useUrlQuery } from "../core/hooks";
import styles from "../styles/TaskContent.module.scss";

function TaskOverview() {
    return <Box className={styles.overview}>
        <Typography variant="h6" className={styles.title}>Overview</Typography>
        <Box className={styles.content}>
            <p dangerouslySetInnerHTML={{
                __html: `
                    a) Basic details that should be included. Working of the campaign.<br/><br/>
                    b) Required tags, hashtags, caption details<br/><br/>
                    c) The link required to be put - <a href="www.dffg.in">www.dffg.in<a/><br/><br/>
                    d) Ideas and inspiration sources, ideas, campaign goals, steps if required.
                `
            }}></p>
        </Box>
    </Box>
}

function TaskReferencePosts() {
    return <Box className={styles.referencePosts}>
        <Typography variant="h6" className={styles.title}>Reference Posts</Typography>
        <Box className={styles.content}>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
        </Box>
    </Box>
}

export function TaskContent() {
    const taskId = useUrlParam("id", 'a-simple-id');
    const deliverable = useUrlQuery("deliverable", "reel");
    const action = useUrlQuery("action", "approval");

    return <Box className={styles.page}>
        <Box padding={2} className={styles.header}>
            <Typography variant="h6" className={styles.title}>
                {deliverable === "reel" && "1. Reel"}
                {deliverable === "static-story" && "2. Static Post"}
            </Typography>
            <Typography variant="h6" className={styles.meta}>
                {action === "approval" && "Content Approval"}
                {action === "submit" && "Submit Proof"}
            </Typography>
        </Box>
        <Box className={styles.due}>
            <Typography variant="body1" className={styles.text}>Due Date For Submissions 04 July 2022</Typography>
        </Box>
        <TaskOverview/>
        <TaskReferencePosts/>
    </Box>
}