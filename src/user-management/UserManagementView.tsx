import { Box, Table, TableBody, TableHead, TableRow, TableCell, Typography, IconButton, Paper, Menu, MenuItem, Grid } from "@material-ui/core";
import { MouseEvent, useCallback, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { AppMetadata } from "../components/AppMetadata";
import { StyledTableHeading } from "../components/custom";
import { EditAccessView } from "./EditAccessView";
import { InviteAndAssign } from "./InviteAndAssign";

export function UserManagementView() {
    const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement>();
    const [editing, setEditing] = useState(false);

    const onUserSelected = useCallback((ev: MouseEvent<HTMLButtonElement>) => {
        setMenuAnchor(ev.currentTarget);
    }, []);

    const onCloseOption = useCallback(() => {
        setMenuAnchor(undefined);
    }, []);

    const onEdit = useCallback(() => {
        setEditing(true);
        onCloseOption();
    }, [onCloseOption]);

    const onDelete = useCallback(() => {
        onCloseOption();
    }, [onCloseOption]);

    return <Box>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box padding={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Typography variant="h6" style={{ textTransform: 'uppercase' }}>
                        User Management
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Paper elevation={0}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableHeading>Users</StyledTableHeading>
                                <StyledTableHeading>Status</StyledTableHeading>
                                <StyledTableHeading>Join Date</StyledTableHeading>
                                <StyledTableHeading>Role</StyledTableHeading>
                                <StyledTableHeading>Access Level</StyledTableHeading>
                                <StyledTableHeading></StyledTableHeading>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1">Username</Typography>
                                    <Typography variant="caption">name@email.tld</Typography>
                                </TableCell>
                                <TableCell>Joined</TableCell>
                                <TableCell>04 July 2022</TableCell>
                                <TableCell>Owner</TableCell>
                                <TableCell>All Campaigns</TableCell>
                                <TableCell>
                                    <IconButton onClick={(ev) => onUserSelected(ev)}>
                                        <MdMoreVert size={18} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1">Username</Typography>
                                    <Typography variant="caption">name@email.tld</Typography>
                                </TableCell>
                                <TableCell>Joined</TableCell>
                                <TableCell>04 July 2022</TableCell>
                                <TableCell>Owner</TableCell>
                                <TableCell>All Campaigns</TableCell>
                                <TableCell>
                                    <IconButton onClick={(ev) => onUserSelected(ev)}>
                                        <MdMoreVert size={18} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1">Username</Typography>
                                    <Typography variant="caption">name@email.tld</Typography>
                                </TableCell>
                                <TableCell>Joined</TableCell>
                                <TableCell>04 July 2022</TableCell>
                                <TableCell>Owner</TableCell>
                                <TableCell>All Campaigns</TableCell>
                                <TableCell>
                                    <IconButton onClick={(ev) => onUserSelected(ev)}>
                                        <MdMoreVert size={18} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1">Username</Typography>
                                    <Typography variant="caption">name@email.tld</Typography>
                                </TableCell>
                                <TableCell>Joined</TableCell>
                                <TableCell>04 July 2022</TableCell>
                                <TableCell>Owner</TableCell>
                                <TableCell>All Campaigns</TableCell>
                                <TableCell>
                                    <IconButton onClick={(ev) => onUserSelected(ev)}>
                                        <MdMoreVert size={18} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Menu
                        anchorEl={menuAnchor}
                        elevation={2}
                        open={Boolean(menuAnchor)}
                        onClose={onCloseOption}>
                        <MenuItem onClick={onEdit}>Edit</MenuItem>
                        <MenuItem onClick={onDelete}>Delete</MenuItem>
                    </Menu>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            {editing && <EditAccessView onCancel={() => setEditing(false)} />}
                            {!editing && <InviteAndAssign />}
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <AppMetadata/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}