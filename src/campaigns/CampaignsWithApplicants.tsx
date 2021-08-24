import { Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { __tr } from "../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../styles/CampaignTable.module.scss";
import { UppercaseSbText } from "../components/custom";
import { Routes } from "../routes";

export function CampaignsWithApplicants() {
    return <div className={styles.section}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <UppercaseSbText variant="h6">{__tr("campaigns")}</UppercaseSbText>
                        </TableCell>
                        <TableCell>
                            <UppercaseSbText variant="h6">{__tr("status")}</UppercaseSbText>
                        </TableCell>
                        <TableCell>
                            <UppercaseSbText variant="h6">{__tr("applicants")}</UppercaseSbText>
                        </TableCell>
                        <TableCell></TableCell>
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
                            Active
                        </TableCell>
                        <TableCell>
                            <Link to={Routes.viewCampaignApplicants("a-simple-id")}>View(150)</Link>
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
                            Active
                        </TableCell>
                        <TableCell>
                            <Link to={Routes.viewCampaignApplicants("a-simple-id")}>View(13)</Link>
                        </TableCell>
                        <TableCell>
                            <IconButton size="small">
                                <MdMoreVert size={24} />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={styles.cellLast}>
                            <div className={styles.campaignTitleRow}>
                                <Avatar>
                                    <MdPerson size={24} />
                                </Avatar>
                                <Typography variant="body1" className={styles.title}>Stich With Biba</Typography>
                            </div>
                        </TableCell>
                        <TableCell className={styles.cellLast}>
                            Closed
                        </TableCell>
                        <TableCell className={styles.cellLast}>
                            <Link to={Routes.viewCampaignApplicants("a-simple-id")}>View(19)</Link>
                        </TableCell>
                        <TableCell className={styles.cellLast}>
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