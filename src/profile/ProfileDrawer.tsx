import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { PropsWithChildren, ReactNode, useState } from "react";
import { IconGender, IconLocation } from "../components/Icons";
import { Stars } from "../components/Stars";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { UnmodifiableProgress } from "../components/UnmodifiableProgress";
import { __tr } from "../i18n";
import styles from "../styles/ProfileDrawer.module.scss";
import { CampaignReview } from "../campaigns/CampaignReview";

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

interface TitledProps {
    icon: ReactNode;
    title: string;
    content: string;
}

function TitledContent(props: TitledProps) {
    return <Box className={styles.titledContent}>
        <div className={styles.iconWrapper}>
            <span className={styles.icon}>
                {props.icon}
            </span>
        </div>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.content}>{props.content}</span>
    </Box>
}

function SquareChip(props: { label: string }) {
    return <span className={styles.squareChip}>{props.label}</span>
}

function TitledSection(props: PropsWithChildren<{ title: string }>) {
    return <Box className={styles.titledSection}>
        <Box className={styles.header}>
            <Typography variant="body1" className={styles.title}>{props.title}</Typography>
        </Box>
        <Box className={styles.content}>
            {
                props.children
            }
        </Box>
    </Box>
}

export function ProfileDrawer() {
    const [activeTab, setActiveTab] = useState(0);

    return <Box className={styles.page}>
        <Box className={styles.header}>
            <div className={styles.avatar}></div>
            <Typography variant="h6">Lara Dennis</Typography>
            <span className={styles.influencer}>Influencer <span className={styles.stars}>4.0 ★</span> (125)</span>
            <span className={styles.collabs}>collabs: jasmine.croucher@yahoo.com</span>
            <span className={styles.username}>@Lara Dennis</span>
        </Box>
        <Box className={styles.resumes}>
            <Box className={styles.resume}>
                <span className={styles.title}>20K</span>
                <span className={styles.subtitle}>{__tr("totalReach")}</span>
            </Box>
            <Box className={styles.resume}>
                <span className={styles.title}>90%</span>
                <span className={styles.subtitle}>{__tr("averageEngagement")}</span>
            </Box>
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
            <Box>
                <Box className={styles.titledRow}>
                    <TitledContent
                        icon={<IconLocation size={24} />}
                        title={__tr("location")}
                        content="Jammu & kashmir" />
                    <TitledContent
                        icon={<IconGender size={24} />}
                        title={__tr("gender")}
                        content="Female" />
                </Box>
                <TitledSection title={__tr("languages")}>
                    <SquareChip label="English" />
                    <SquareChip label="French" />
                    <SquareChip label="Russian" />
                </TitledSection>
                <TitledSection title={__tr("interests")}>
                    <SquareChip label="Design" />
                    <SquareChip label="Startup" />
                    <SquareChip label="Fashion" />
                </TitledSection>
            </Box>
        </Box>}
        {activeTab === 1 && <Box className={styles.tabPanel}>
            <Box marginY={2} className={styles.tableContainer}>
                <ContentRow>
                    <Typography variant="body1" className={styles.key} style={{ fontWeight: 600 }}>{__tr("ratingAsInfluencer")}</Typography>
                    <div className={styles.cellProgress}>
                        <span className={styles.approx}><Stars count={4.1}/> (100)</span>
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
                        <span className={styles.approx}><Stars count={4.1}/> (125)</span>
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