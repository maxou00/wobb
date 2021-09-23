import { Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { __tr } from "../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../styles/CampaignTable.module.scss";
import { UppercaseSbText } from "../components/custom";
import { Routes } from "../routes";
import { usePostedCampaigns } from "../state/selectors";
import { CssVariables } from "../css-variables";
import { Campaign, Jobs } from "../models";
import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";


function PostedCampaignTableRow(props: { campaign: Campaign }) {
    const [applicants, setApplicants] = useState<Jobs[]>([]);

    useEffect(() => {

        DataStore.query(Jobs, j => j.campaignID("eq", props.campaign.id))
        .then((jobs) => {
            setApplicants(jobs);
        })

    }, [props.campaign.id]);

    return <TableRow>
        <TableCell>
            <div className={styles.campaignTitleRow}>
                <Avatar>
                    <MdPerson size={24} />
                </Avatar>
                <Typography variant="body1" className={styles.title}>{props.campaign.Name || ""}</Typography>
            </div>
        </TableCell>
        <TableCell>
            {__tr(`status_${props.campaign.CampaignStatus?.toLowerCase() || ""}`)}
        </TableCell>
        <TableCell>
            <Link to={Routes.viewCampaignApplicants(props.campaign.id)} style={{ fontWeight: 500, color: CssVariables.colorPrimary }}>View({applicants.length || 0})</Link>
        </TableCell>
        <TableCell>
            <IconButton size="small">
                <MdMoreVert size={24} />
            </IconButton>
        </TableCell>
    </TableRow>
}

export function PostedCampaignTable() {
    const postedCampaigns = usePostedCampaigns().sort((p1, p2) => Date.parse(p2.createdAt || "") - Date.parse(p1.createdAt || ""));

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
                            return <PostedCampaignTableRow key={p.id} campaign={p}/>
                        })
                    }
                    {
                        postedCampaigns.length === 0 && <TableRow>
                            <TableCell colSpan={4}>{__tr("noCampaignToShow")}</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}