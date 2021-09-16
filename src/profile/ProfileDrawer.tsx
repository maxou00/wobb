import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { useState } from "react";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { UnmodifiableProgress } from "../components/UnmodifiableProgress";
import { __tr } from "../i18n";
import styles from "../styles/ProfileDrawer.module.scss";
import { CampaignReview } from "../campaigns/CampaignReview";
import { UserResumeCard } from "./UserResumeCard";
import { AboutUser } from "./AboutUser";
import { UserRatingStats } from "./UserRatingStats";
import { ContentRow } from "./ContentRow";

export function ProfileDrawer() {
    const [activeTab, setActiveTab] = useState(0);

    return <Box className={styles.page}>
        <Box paddingY={2} width="100%">
            {/*<UserResumeCard  /> */}
        </Box>
        <Box className={styles.actions}>
            <TextTransformNoneButton variant="outlined" color="primary">{__tr("message")}</TextTransformNoneButton>
        </Box>
        <Box className={styles.tabsWrapper}>
            <Tabs
                aria-label="Profile tabs"
                value={activeTab}
                className={styles.tabs}
                textColor="primary"
                indicatorColor="primary"
                variant="fullWidth"
                onChange={(ev, tab) => setActiveTab(tab)}>
                <Tab label={__tr("about")} />
                <Tab label={__tr("campaignsReviews")} />
            </Tabs>
        </Box>
        {activeTab === 0 && <Box className={styles.tabPanel}>
            <Box marginY={2} className={styles.tableContainer}>
                <ContentRow>
                    <Typography variant="body2" className={styles.key}>{__tr("inboxResponseRate")}</Typography>
                    <div className={styles.cellProgress}>
                        <div className={styles.progress}>
                            <UnmodifiableProgress height={8} progress={65} />
                        </div>
                        <span className={styles.percent}>65%</span>
                    </div>
                </ContentRow>
                <ContentRow>
                    <Typography variant="body2" className={styles.key}>{__tr("firstResponseTime")}</Typography>
                    <Typography variant="body2" className={styles.hour}>2h 20min</Typography>
                </ContentRow>
                <ContentRow>
                    <Typography variant="body2" className={styles.key}>{__tr("lastDelivery")}</Typography>
                    <Typography variant="body2" className={styles.hour}>2h 30min</Typography>
                </ContentRow>
            </Box>
            <AboutUser/>
        </Box>}
        {activeTab === 1 && <Box className={styles.tabPanel}>
            <UserRatingStats/>
            <Box marginY={2}>
                <Box paddingY={2}>
                    <Typography variant="h6">{__tr("campaignReview")}</Typography>
                </Box>
                <Box>
                    <CampaignReview />
                    <CampaignReview />
                </Box>
            </Box>
        </Box>}
    </Box>
}