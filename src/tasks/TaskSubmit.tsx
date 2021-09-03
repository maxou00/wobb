import { Box, TextField, Typography } from "@material-ui/core";
import { useUrlQuery } from "../core/hooks";
import { IconCloudUpload, IconEdit } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import styles from "../styles/TaskSubmit.module.scss";
import { ViewCountInput } from "../components/ViewCountInput";
import { ChangeEvent, useState } from "react";
import { useCallback } from "react";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";

export function TaskSubmit() {
    const [errors, setErrors] = useState<any>({});

    const deliverable = useUrlQuery("deliverable", "reel");
    const action = useUrlQuery("action", "approval");

    const onSubmit = useCallback((ev: ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();
        let form = ev.currentTarget;
        let data = {
            link: form.link.value,
            viewCount: form.viewCount.value
        }

        let newErrs: any = {};
        if(data.link && !Validators.isLink(data.link)) {
            newErrs.link = __tr("errorInvalidLink");
        }
        if(data.viewCount && !Validators.isViewCount(data.viewCount)) {
            newErrs.viewCount = __tr("errorInvalidViewCount");
        }
        setErrors(newErrs);
    }, []);

    return <Box className={styles.page}>
        <Box padding={2} className={styles.header}>
            <IconEdit size={24} />
            <Typography variant="h6" style={{ marginLeft: 8 }} className={styles.title}>Submit task</Typography>
        </Box>
        <Box component="form" onSubmit={onSubmit} padding={2} className={styles.content} style={{ width: '100%' }}>
            {(deliverable !== "static-story") && <Box>
                <Typography variant="body1" style={{ fontWeight: 500 }} className={styles.textCopyPaste}>
                    Enter / Paste the link below
                </Typography>
                <TextField
                    variant="outlined"
                    multiline
                    minRows={4}
                    maxRows={6}
                    name="link"
                    helperText={errors.link}
                    error={errors.link} />
            </Box>}
            {deliverable === "static-story" && action === "submit" && <Box paddingY={2} style={{ width: '100%' }}>
                <ViewCountInput
                    name="viewCount" error={errors.viewCount}/>
                {errors.viewCount && <Typography variant="body2" color="error">{errors.viewCount}</Typography>}
            </Box>}
            {(deliverable !== "reel" || action !== "submit") && <Box paddingY={2} className={styles.sectionUpload}>
                <IconCloudUpload size={128} />
                <Typography variant="body2">Drag & Drop your image</Typography>
                <Typography variant="body2">or <label htmlFor="imageUpload" className={styles.labelUpload}>upload image</label> </Typography>
                <input type="file" id="imageUpload" hidden />
            </Box>}
            <Box paddingY={2}>
                <TextTransformNoneButton type="submit" variant="outlined" color="primary">Submit Now</TextTransformNoneButton>
            </Box>
        </Box>
    </Box>
}