import { Box, TextField, TextFieldProps } from "@material-ui/core";
import { ChangeEvent, useCallback, useState } from "react";
import { Validators } from "../core/validators";
import { __tr } from "../i18n";


export function FormattedMessageBox(props: {placeholder?: string}){
    const [text, setText] = useState("");
    const [errors, setErrors] = useState<any>({});

    const onCommentChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let nextErrs: any = {...errors};
        let value = ev.currentTarget.value;
        setText(value);
        if(value && !Validators.isComment(value)) {
            nextErrs.text = __tr("errorInvalidMsg");
        }
        setErrors(nextErrs);
    }, [errors]);

    return <Box>
        <TextField 
            fullWidth
            multiline 
            variant="outlined"
            minRows={4} 
            maxRows={8}
            placeholder={props.placeholder ?? "Type your message here" }
            value={text}
            onChange={onCommentChange}
            error={errors.text}
            helperText={errors.text}/>
    </Box>
}