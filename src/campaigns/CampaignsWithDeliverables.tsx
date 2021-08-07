import { Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { __tr } from "../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../styles/CampaignTable.module.scss";

export function CampaignsWithDeliverables() {
    return <div className={styles.section}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.colTitle}>{__tr("campaigns")}</TableCell>
                        <TableCell className={styles.colTitle}>{__tr("status")}</TableCell>
                        <TableCell className={styles.colTitle}>{__tr("deliverables")}</TableCell>
                        <TableCell className={styles.colTitle}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <div className={styles.campaignTitleRow}>
                                <Avatar>
                                    <MdPerson size={24} />
                                </Avatar>
                                <Typography variant="body1" className={styles.title}>Stich With Biba</Typography>
                            </div>
                        </TableCell>
                        <TableCell>
                            Applied
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <IconButton size="small">
                                <MdMoreVert size={24} />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <div className={styles.campaignTitleRow}>
                                <Avatar>
                                    <MdPerson size={24} />
                                </Avatar>
                                <Typography variant="body1" className={styles.title}>Stich With Biba</Typography>
                            </div>
                        </TableCell>
                        <TableCell>
                            Applied
                        </TableCell>
                        <TableCell>
                            <Link to="/">Submit Task</Link>
                        </TableCell>
                        <TableCell>
                            <IconButton size="small">
                                <MdMoreVert size={24} />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <div className={styles.campaignTitleRow}>
                                <Avatar>
                                    <MdPerson size={24} />
                                </Avatar>
                                <Typography variant="body1" className={styles.title}>Stich With Biba</Typography>
                            </div>
                        </TableCell>
                        <TableCell>
                            Applied
                        </TableCell>
                        <TableCell>
                            <Link to="/">View Task</Link>
                        </TableCell>
                        <TableCell>
                            <IconButton size="small">
                                <MdMoreVert size={24} />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}