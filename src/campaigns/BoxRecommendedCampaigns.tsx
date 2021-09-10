import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@material-ui/core";
import { __tr } from "../i18n";

import styles from "../styles/RecommendedCampaigns.module.scss";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { UppercaseSbText } from "../components/custom";
import { css } from "@emotion/css";
import { CssVariables } from "../css-variables";
import recommended from "../core/api/recommendedCampaigns.json";

const campaignCardStyles = css`
    background: ${CssVariables.colorPrimarySurface} !important;
    margin: 12px 0px;
`;

export function BoxRecommendedCampaigns(props: { viewMore?: boolean }) {
    return <Box className={styles.region}>
        <Box padding={2} className={styles.header}>
            <UppercaseSbText variant="h6">{__tr("recommendedCampaigns")}</UppercaseSbText>
        </Box>
        <Box className={styles.content}>
            <List dense disablePadding style={{ width: '100%' }}>
                {
                    recommended.map((campaign) => {
                        return <Paper elevation={1} className={campaignCardStyles} key={campaign.id}>
                            <ListItem button className={styles.campaign}>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={campaign.campaignName}
                                    secondary={campaign.brand.name} />
                            </ListItem>
                        </Paper>
                    })
                }
            </List>
        </Box>
        {props.viewMore && <Box paddingY={1} width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <TextTransformNoneButton variant="text" color="primary">View more</TextTransformNoneButton>
        </Box>}
    </Box>
}