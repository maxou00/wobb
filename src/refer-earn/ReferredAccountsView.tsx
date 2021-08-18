import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import { CssVariables } from "../css-variables";

export function ReferredAccountView() {
    return <ListItem>
        <ListItemAvatar>
            <Avatar />
        </ListItemAvatar>
        <ListItemText
            primary="Wenddy"
            secondary="16 July 2021"
            primaryTypographyProps={{
                style: {
                    fontWeight: 600
                }
            }}
            secondaryTypographyProps={{
                style: {
                    color: CssVariables.colorGrayV2
                }
            }}/>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="body1" style={{ fontWeight: 600 }}>100</Typography>
            <Typography variant="body2" style={{ fontWeight: 300, fontSize: CssVariables.fontSizeAnySmall, color: CssVariables.colorGrayV2 }}>Coins earned</Typography>
        </Box>
    </ListItem>
}

export function ReferredAccountList() {
    return <List>
        <ReferredAccountView/>
        <ReferredAccountView/>
        <ReferredAccountView/>
        <ReferredAccountView/>  
    </List>
}