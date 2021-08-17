import { Box, Checkbox, List, ListItem, ListItemText } from "@material-ui/core";

export function AccessLevelPicker() {
    return <Box style={{minWidth: '320px'}}>
        <List dense disablePadding>
            <ListItem button>
                <Checkbox color="primary"/>
                <ListItemText
                    primary="All Campaign"/>
            </ListItem>
            <ListItem button>
                <Checkbox color="primary"/>
                <ListItemText
                    primary="Campaign 1"/>
            </ListItem>
            <ListItem button>
                <Checkbox color="primary"/>
                <ListItemText
                    primary="Campaign 2"/>
            </ListItem>
            <ListItem button>
                <Checkbox color="primary"/>
                <ListItemText
                    primary="Campaign 3"/>
            </ListItem>
        </List>
    </Box>
}