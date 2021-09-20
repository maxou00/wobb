import { Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { __tr } from "../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../styles/CampaignTable.module.scss";
import { UppercaseSbText } from "../components/custom";
import { Routes } from "../routes";
import { usePostedCampaigns } from "../state/selectors";
import { CssVariables } from "../css-variables";

export function PostedCampaignTable() {
    const postedCampaigns = usePostedCampaigns().sort((p1,p2) => Date.parse(p2.createdAt || "") - Date.parse(p1.createdAt || "")) ;

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
                        postedCampaigns.map((p) => {
                            return <TableRow key={p.id}>
                                <TableCell>
                                    <div className={styles.campaignTitleRow}>
                                        <Avatar>
                                            <MdPerson size={24} />
                                        </Avatar>
                                        <Typography variant="body1" className={styles.title}>{p.Name || ""}</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    { __tr(`status_${p.CampaignStatus?.toLowerCase() || ""}`) }
                                </TableCell>
                                <TableCell>
                                    <Link to={Routes.viewCampaignApplicants(p.id)} style={{fontWeight: 500, color: CssVariables.colorPrimary}}>View({p.CampaignUsers?.length || 0})</Link>
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