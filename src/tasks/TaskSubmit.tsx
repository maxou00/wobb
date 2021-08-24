import { Box, TextField, Typography } from "@material-ui/core";
import { useUrlQuery } from "../core/hooks";
import { IconCloudUpload, IconEdit } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import styles from "../styles/TaskSubmit.module.scss";
import { ViewCountInput } from "../components/ViewCountInput";

export function TaskSubmit() {

    const deliverable = useUrlQuery("deliverable", "reel");
    const action = useUrlQuery("action", "approval");

    return <Box className={styles.page}>
        <Box padding={2} className={styles.header}>
            <IconEdit size={24}/>
            <Typography variant="h6" style={{marginLeft: 8}} className={styles.title}>Submit task</Typography>
        </Box>
        <Box padding={2} className={styles.content} style={{width: '100%'}}>
            {(deliverable !== "static-story") && <Box>
                <Typography variant="body1" style={{ fontWeight: 500 }} className={styles.textCopyPaste}>
                    Enter / Paste the link below
                </Typography>
                <TextField 
                    variant="outlined" 
                    multiline 
                    minRows={4} 
                    maxRows={6}
                    />
            </Box>}
            { deliverable === "static-story" && action==="submit" && <Box paddingY={2} style={{width: '100%'}}>
                <ViewCountInput/>
            </Box> }
            {(deliverable !== "reel" || action !== "submit") && <Box paddingY={2} className={styles.sectionUpload}>
                <IconCloudUpload size={128} />
                <Typography variant="body2">Drag & Drop your image</Typography>
                <Typography variant="body2">or <label htmlFor="imageUpload" className={styles.labelUpload}>upload image</label> </Typography>
                <input type="file" id="imageUpload" hidden />
            </Box>}
            <Box paddingY={2}>
                <TextTransformNoneButton variant="outlined" color="primary">Submit Now</TextTransformNoneButton>
            </Box>
        </Box>
    </Box>
}