import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { __tr } from "../i18n";
import { MdGroup } from "react-icons/md";

import styles from "../styles/RecommendedCampaigns.module.scss";


export function BoxRecommendedCampaigns() {
    return <div className={styles.region}>
        <div className={styles.header}>
            <h4 className={styles.title}>{__tr("recommendedCampaigns")}</h4>
        </div>
        <div className={styles.content}>
            <List style={{ width: '100%' }}>
                <ListItem button className={styles.campaign}>
                    <ListItemAvatar>
                        <MdGroup size={24} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Just Do It"
                        secondary="Nike" />
                </ListItem>
                <ListItem button className={styles.campaign}>
                    <ListItemAvatar>
                        <MdGroup size={24} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Share a Coke"
                        secondary="Coca-Cola" />
                </ListItem>
            </List>
        </div>
    </div>
}