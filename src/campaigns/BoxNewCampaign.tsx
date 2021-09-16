import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@material-ui/core";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { SemiBoldText, UppercaseSbText } from "../components/custom";
import { IconEdit } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";
import styles from "../styles/NewCampaign.module.scss";
import { CreateCampaign } from "./create/CreateCampaign";

export function BoxNewCampaign() {
    const [isCreating, setIsCreating] = useState(false);

    return <Box className={styles.region}>
        <Box padding={2} className={styles.header}>
            <Box>
                <IconEdit size={18} />
            </Box>
            <Box marginX={1}>
                <UppercaseSbText variant="h6">{__tr("newCampaign")}</UppercaseSbText>
            </Box>
        </Box>
        <Box className={styles.content}>
            <p dangerouslySetInnerHTML={{ __html: __tr("newCampaignText") }}></p>
        </Box>
        <Box padding={2} width="100%">
            <Button onClick={() => setIsCreating(true)} fullWidth variant="outlined" size="large" color="primary">
                {__tr("postCampaign")}
            </Button>
        </Box>
        <CreateCampaign 
            open={isCreating}
            scroll="paper"
            maxWidth="md"
            fullWidth onClose={() => setIsCreating(false)}/>
    </Box>
}