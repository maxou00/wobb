import { Box, TextField } from "@material-ui/core";


export function FormattedMessageBox(){
    return <Box>
        <TextField 
            fullWidth
            multiline 
            variant="outlined"
            minRows={4} 
            maxRows={8}
            placeholder="Type your message here"/>
    </Box>
}