import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import { CssVariables } from "../../css-variables";
import { __tr } from "../../i18n";

export function OrderTransactions() {
    return <Box>
        <Box padding={2}>
            <Typography variant="h6" style={{textTransform: 'uppercase'}}>{__tr("transactionList")}</Typography>
        </Box>
        <Divider />
        <Box>
            <List disablePadding>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Ready to stich with Biba"
                        primaryTypographyProps={{
                            variant: "body1",
                            style: {
                                fontWeight: 400
                            }
                        }}
                        secondary="Cash earned" />
                    <ListItemSecondaryAction>
                        <Typography variant="body1" style={{fontWeight: 600}}>+ ₹3,000</Typography>
                        <Typography variant="body2" style={{color: CssVariables.colorGrayV2}}>16 July 2021</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Ready to stich with Biba"
                        primaryTypographyProps={{
                            variant: "body1",
                            style: {
                                fontWeight: 400
                            }
                        }}
                        secondary="Cash earned" />
                    <ListItemSecondaryAction>
                        <Typography variant="body1" style={{fontWeight: 600}}>+ ₹3,000</Typography>
                        <Typography variant="body2" style={{color: CssVariables.colorGrayV2}}>16 July 2021</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Box>
    </Box>
}