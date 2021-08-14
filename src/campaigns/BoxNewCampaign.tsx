import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@material-ui/core";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { IconEdit } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";
import styles from "../styles/NewCampaign.module.scss";
import { CreateCampaign } from "./create/CreateCampaign";

export function BoxNewCampaign() {
    const [isCreating, setIsCreating] = useState(false);

    return <div className={styles.region}>
        <div className={styles.header}>
            <div>
                <IconEdit size={18} />
            </div>
            <h4 className={styles.title}>{__tr("newCampaign")}</h4>
        </div>
        <div className={styles.content}>
            <p dangerouslySetInnerHTML={{ __html: __tr("newCampaignText") }}></p>
            <Button onClick={() => setIsCreating(true)} fullWidth variant="outlined" color="primary">
                {__tr("postCampaign")}
            </Button>
        </div>
        <Dialog open={isCreating} scroll="body" maxWidth="md" fullWidth onClose={() => setIsCreating(false)}>
            <DialogTitle>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6">{__tr("newCampaign")}</Typography>
                    <IconButton onClick={() => setIsCreating(false)}>
                        <MdClose />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent dividers>
                <CreateCampaign />
            </DialogContent>
            <DialogActions style={{justifyContent: "center", margin: '4px 0px'}}>
                <TextTransformNoneButton variant="outlined" color="default" size="small">{__tr("saveDraft")}</TextTransformNoneButton>
                <TextTransformNoneButton variant="contained" color="primary" size="small">{__tr("postCampaign")}</TextTransformNoneButton>
            </DialogActions>
        </Dialog>
    </div>
}