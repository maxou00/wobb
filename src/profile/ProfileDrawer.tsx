import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { ReactNode, useState } from "react";
import { Stars } from "../components/Stars";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { UnmodifiableProgress } from "../components/UnmodifiableProgress";
import { __tr } from "../i18n";
import styles from "../styles/ProfileDrawer.module.scss";
import { CampaignReview } from "../campaigns/CampaignReview";
import { UserResumeCard } from "./UserResumeCard";
import { AboutUser } from "./AboutUser";

function ContentRow(props: { children: ReactNode[] }) {
    return <Box className={styles.row}>
        <Box className={styles.keyCell}>
            {
                props.children[0]
            }
        </Box>
        <Box className={styles.valueCell}>
            {
                props.children[1]
            }
        </Box>
    </Box>
}

export function ProfileDrawer() {
    const [activeTab, setActiveTab] = useState(0);

    return <Box className={styles.page}>
        <Box paddingY={2} width="100%">
            <UserResumeCard />
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
            <Box marginY={2} className={styles.tableContainer}>
                <ContentRow>
                    <Typography variant="body1" className={styles.key} style={{ fontWeight: 600 }}>{__tr("ratingAsInfluencer")}</Typography>
                    <div className={styles.cellProgress}>
                        <span className={styles.approx}><Stars count={4.1} /> (100)</span>
                    </div>
                </ContentRow>
                <ContentRow>
                    <Typography variant="body2" className={styles.key}>{__tr("campaignsApplied")}</Typography>
                    <Typography variant="body2" className={styles.value}>8</Typography>
                </ContentRow>
                <ContentRow>
                    <Typography variant="body2" className={styles.key}>{__tr("campaignSuccessRate")}</Typography>
                    <div className={styles.cellProgress}>
                        <div className={styles.progress}>
                            <UnmodifiableProgress height={8} progress={90} />
                        </div>
                        <span className={styles.percent}>90%</span>
                    </div>
                </ContentRow>
                <ContentRow>
                    <Typography variant="body2" className={styles.key}>{__tr("onTimeDelivery")}</Typography>
                    <div className={styles.cellProgress}>
                        <div className={styles.progress}>
                            <UnmodifiableProgress height={8} progress={85} />
                        </div>
                        <span className={styles.percent}>85%</span>
                    </div>
                </ContentRow>
            </Box>
            <Box marginY={2} className={styles.tableContainer}>
                <ContentRow>
                    <Typography variant="body1" className={styles.key} style={{ fontWeight: 600 }}>{__tr("ratingAsBuyer")}</Typography>
                    <div className={styles.cellProgress}>
                        <span className={styles.approx}><Stars count={4.1} /> (125)</span>
                    </div>
                </ContentRow>
                <ContentRow>
                    <Typography variant="body2" className={styles.key}>{__tr("campaignsPosted")}</Typography>
                    <Typography variant="body2" className={styles.value}>10</Typography>
                </ContentRow>
                <ContentRow>
                    <Typography variant="body2" className={styles.key}>{__tr("campaignSuccessRate")}</Typography>
                    <div className={styles.cellProgress}>
                        <div className={styles.progress}>
                            <UnmodifiableProgress height={8} progress={90} />
                        </div>
                        <span className={styles.percent}>90%</span>
                    </div>
                </ContentRow>
            </Box>
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