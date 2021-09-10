import { Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { __tr } from "../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../styles/CampaignTable.module.scss";
import { UppercaseSbText } from "../components/custom";
import { Routes } from "../routes";
import posted from "../core/api/postedCampaigns.json";

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
                    {
                        posted.map((p) => {
                            return <TableRow key={p.campaignId}>
                                <TableCell>
                                    <div className={styles.campaignTitleRow}>
                                        <Avatar>
                                            <MdPerson size={24} />
                                        </Avatar>
                                        <Typography variant="body1" className={styles.title}>{p.campaignName}</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    { p.status === "active" ? "Active" : "Closed" }
                                </TableCell>
                                <TableCell>
                                    <Link to={Routes.viewCampaignApplicants("a-simple-id")}>View({p.applicants})</Link>
                                </TableCell>
                                <TableCell>
                                    <IconButton size="small">
                                        <MdMoreVert size={24} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}