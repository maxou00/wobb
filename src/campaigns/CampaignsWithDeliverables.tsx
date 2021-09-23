import { Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { __tr } from "../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../styles/CampaignTable.module.scss";
import { UppercaseSbText } from "../components/custom";
import { Routes } from "../routes";
import { useAppliedCampaigns, useJobs } from "../state/selectors";
import { JobStatus } from "../models";

export function CampaignsWithDeliverables() {
    const campaigns = useAppliedCampaigns().sort((p1,p2) => Date.parse(p2.createdAt || "") - Date.parse(p1.createdAt || ""));
    const jobs = useJobs();

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
                            <UppercaseSbText variant="h6">{__tr("deliverables")}</UppercaseSbText>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        campaigns.map((c) => {
                            let job = jobs.find((j) => j.campaignID === c.id);
                            return <TableRow key={c.id}>
                                <TableCell>
                                    <div className={styles.campaignTitleRow}>
                                        <Avatar>
                                            <MdPerson size={24} />
                                        </Avatar>
                                        <Typography variant="body1" className={styles.title}>{c.Name}</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {__tr(job?.status?.toLowerCase() || "applied")}
                                </TableCell>
                                <TableCell>
                                    { job?.status === JobStatus.HIRED && <Link to={Routes.viewCampaignTasks(c.id)}>Submit Task</Link> }
                                    { !job?.status && <Link to={Routes.viewCampaignTasks(c.id)}>View Task</Link> }
                                </TableCell>
                                <TableCell>
                                    <IconButton size="small">
                                        <MdMoreVert size={24} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        })
                    }
                    {
                        campaigns.length === 0 && <TableRow>
                            <TableCell colSpan={4}>{__tr("noCampaignToShow")}</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}