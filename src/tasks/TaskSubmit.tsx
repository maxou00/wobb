import { Box, Divider, TextField, Typography } from "@material-ui/core";
import { useUrlQuery } from "../campaigns/hooks";
import { IconCloudUpload } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import styles from "../styles/TaskSubmit.module.scss";

export function TaskSubmit() {

    const deliverable = useUrlQuery("deliverable", "reel");
    const action = useUrlQuery("action", "approval");

    return <Box className={styles.page}>
        <Box padding={2} className={styles.header}>
            <Typography variant="h6" className={styles.title}>Submit task</Typography>
        </Box>
        <Box padding={2} className={styles.content}>
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
            { deliverable === "static-story" && action==="submit" && <Box paddingY={2}>
                <TextField 
                    variant="outlined" 
                    InputProps={{
                        startAdornment: <span 
                            style={{whiteSpace: "nowrap", fontSize: '10px'}}>
                                Total View Count
                            </span>,

                        inputProps: {
                            style : {
                                paddingLeft: '8px'
                            }
                        }
                    }}/>
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