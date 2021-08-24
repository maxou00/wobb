import { Avatar, Box, Checkbox, IconButton, StylesProvider, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { useUrlQuery } from "../core/hooks";
import styles from "../styles/PendingDeliverables.module.scss";
import { RequestRevisionDialog } from "./RequestRevisionDialog";

function DeliverableHeader() {
    return <Box className={styles.header}>
        <Box className={styles.identity}>
            <Box className={styles.avatarWrapper}>
                <Avatar />
            </Box>
            <Box className={styles.body}>
                <Typography variant="body1" className={styles.title}>Sukhamani</Typography>
                <Typography variant="body2" className={styles.subtitle}>1. Static Post</Typography>
            </Box>
        </Box>
        <Box className={styles.actions}>
            <IconButton>
                <MdMoreHoriz />
            </IconButton>
        </Box>
    </Box>
}

export function DeliverableContent() {
    return <Box className={styles.content}>
        <p className={styles.text}>
            Sukhmani  Amazing Job done. So glad to work with this beauty. @Lara Dennis. Get ready for upcoming Festive Season in our new digital print crape sharara set🌸
            Jewellery: @jewelsbykiran
            Available in size M L XL XXL
            Material: Crape
            Dm @laglitsbychhavi to place your order.
            #festivecollection#shararaset#indianwear#ethnic#ethnicwear#ethnicweAronline#womenwear#womenwearonline#lookbook#fashionootd#ootd#bookonline#embriodery#embrioderyart#booknow‼️
        </p>
        <TextTransformNoneButton variant="text" color="primary" size="small">Read more</TextTransformNoneButton>
    </Box>
}

export function DeliverableStats() {
    return <Box className={styles.stats}>
        <Box className={styles.stat}>
            <Typography variant="h6" className={styles.title}>5,000</Typography>
            <Typography variant="body2" className={styles.subtitle}>Likes</Typography>
        </Box>
        <Box className={styles.stat}>
            <Typography variant="h6" className={styles.title}>120</Typography>
            <Typography variant="body2" className={styles.subtitle}>Comments</Typography>
        </Box>
        <Box className={styles.stat}>
            <Typography variant="h6" className={styles.title}>92%</Typography>
            <Typography variant="body2" className={styles.subtitle}>Engagement rate</Typography>
        </Box>
        <Box className={styles.stat}>
            <Typography variant="h6" className={styles.title}>120</Typography>
            <Typography variant="body2" className={styles.subtitle}>Views</Typography>
        </Box>
        <Box className={styles.stat}>
            <Typography variant="h6" className={styles.title}>₹ 0.8</Typography>
            <Typography variant="body2" className={styles.subtitle}>CPV</Typography>
        </Box>
        <Box className={styles.stat}>
            <Typography variant="h6" className={styles.title}>5000</Typography>
            <Typography variant="body2" className={styles.subtitle}>Visitors</Typography>
        </Box>
    </Box>
}

interface DeliverableActionsProps {
    onRequestReview(): any;
    onApprove(): any;
}

export function DeliverableAction(props: DeliverableActionsProps) {
    const status = useUrlQuery("status", "content_pending");
    if (status === "post_pending") {
        return <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <Box paddingX={.5}>
                <TextTransformNoneButton variant="outlined" color="default" onClick={props.onRequestReview}>View Post</TextTransformNoneButton>
            </Box>
            <Box paddingX={.5}>
                <TextTransformNoneButton variant="contained" color="primary" onClick={props.onApprove}>Approve</TextTransformNoneButton>
            </Box>
        </Box>
    }
    else if (status === "content_pending") {
        return <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <Box paddingX={.5}>
                <TextTransformNoneButton variant="outlined" color="default" onClick={props.onRequestReview}>Request Revision</TextTransformNoneButton>
            </Box>
            <Box paddingX={.5}>
                <TextTransformNoneButton variant="contained" color="primary" onClick={props.onApprove}>Approve</TextTransformNoneButton>
            </Box>
        </Box>
    }
    return <></>
}


export function DeliverableView(props: DeliverableActionsProps) {
    const status = useUrlQuery("status", "content_pending");

    return <Box className={styles.deliverable}>
        <Box>
            <Box className={styles.assets}></Box>
        </Box>
        <Box className={styles.content}>
            <DeliverableHeader />
            <DeliverableContent />
            {
                status === "post_approved" &&
                <DeliverableStats />
            }
            <DeliverableAction {...props} />
        </Box>
    </Box>
}

export function DeliverableList() {
    const [requestingRevision, setRequestingRevision] = useState(false);
    const [approving, setApproving] = useState(false);

    const onRequestReview = useCallback(() => {
        setRequestingRevision(true);
    }, []);

    const onApprove = useCallback(() => {
        setApproving(true);
    }, []);

    return <Box padding={2}>
        <Box marginY={2} display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
            <Box>
                <Checkbox color="primary" />
            </Box>
            <Box>
                <DeliverableView
                    onRequestReview={onRequestReview}
                    onApprove={onApprove} />
            </Box>
        </Box>
        <Box marginY={2} display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
            <Box>
                <Checkbox color="primary" />
            </Box>
            <Box>
                <DeliverableView
                    onRequestReview={onRequestReview}
                    onApprove={onApprove} />
            </Box>
        </Box>
        <Box marginY={2} display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
            <Box>
                <Checkbox color="primary" />
            </Box>
            <Box>
                <DeliverableView
                    onRequestReview={onRequestReview}
                    onApprove={onApprove} />
            </Box>
        </Box>
        <Box marginY={2} display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
            <Box>
                <Checkbox color="primary" />
            </Box>
            <Box>
                <DeliverableView
                    onRequestReview={onRequestReview}
                    onApprove={onApprove} />
            </Box>
        </Box>
        <Box marginY={2} display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
            <Box>
                <Checkbox color="primary" />
            </Box>
            <Box>
                <DeliverableView
                    onRequestReview={onRequestReview}
                    onApprove={onApprove} />
            </Box>
        </Box>
        <RequestRevisionDialog
            open={requestingRevision}
            maxWidth="md"
            fullWidth
            onClose={() => setRequestingRevision(false)} />
    </Box>
}