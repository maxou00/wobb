import { DataStore } from "@aws-amplify/datastore";
import { Avatar, Box, Chip, Typography } from "@material-ui/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MdDone, MdLink } from "react-icons/md";
import { IconCash, IconPlatform } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { UnmodifiableProgress } from "../components/UnmodifiableProgress";
import { DeliverableWithCount, FollowerRange, Payout } from "../core";
import { capitalize, padZero } from "../core/utils";
import { __tr, __trParams } from "../i18n";
import { CampaignStatus, Profile } from "../models";
import { Campaign, PayoutType } from "../models";
import styles from "../styles/CampaignDetails.module.scss";
import { useCampaignContext } from "./ViewCampaign";

interface SectionProps {
    campaign: Campaign;
}

function CampaignHeader(props: SectionProps) {

    const cashValueAsStr = useMemo(() => {
        let value = "-";
        if (props.campaign.Payout) {
            let decoded = JSON.parse(props.campaign.Payout) as Payout;
            if (decoded.type === PayoutType.FIXED) {
                value = `${decoded.cash.currency} ${decoded.cash.amount}`
            }
        }
        return value;
    }, [props.campaign]);

    return <Box className={styles.header}>
        <Box className={styles.campaign}>
            <Avatar className={styles.img} />
            <Box className={styles.text}>
                <Typography variant="body1" className={styles.title}>{props.campaign.Name}</Typography>
                {
                    props.campaign.Brand && <a href={props.campaign.Brand.website || ""} rel="noreferrer" target="_blank" className={styles.link}>{props.campaign.Brand.name}<MdLink size={24} /> </a>
                }
            </Box>
        </Box>
        <Box className={styles.data}>
            <Box className={styles.head}>
                <IconPlatform size={24} />
                <Typography variant="body1" className={styles.key}>{__tr("platform")}</Typography>
            </Box>
            <Typography variant="body1" className={styles.value}>{capitalize(props.campaign.Platform || "")}</Typography>
        </Box>
        <Box className={styles.data}>
            <Box className={styles.head}>
                <IconCash size={24} />
                <Typography variant="body1" className={styles.key}>{__tr("cash")}</Typography>
            </Box>
            <Typography variant="body1" className={styles.value}>{cashValueAsStr}</Typography>
        </Box>
        <Box className={styles.data}>
            <Box className={styles.head}>
                <IconCash size={24} />
                <Typography variant="body1" className={styles.key}>{__tr("wobbCoins")}</Typography>
            </Box>
            <Typography variant="body1" className={styles.value}>1,000</Typography>
        </Box>
        {
            props.campaign.CampaignStatus === CampaignStatus.PUBLISHED &&
            <Box className={styles.badge}>
                <Typography variant="body2">Active</Typography>
            </Box>
        }
    </Box>
}

export function CampaignPostedBy(props: SectionProps) {
    const [author, setAuthor] = useState<Profile>();

    const dateAsStr = useMemo(() => {
        let date = new Date(Date.parse(props.campaign.createdAt || ""));
        return date.toDateString();
    }, [props.campaign]);

    const fetchProfile = useCallback(async () => {
        let profiles = await DataStore.query(Profile, p => p.uid("eq", props.campaign.uid));
        if (profiles.length > 0) {
            setAuthor(profiles[0]);
        }
    }, [props.campaign]);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return <Box className={styles.postedBy}>
        <Typography variant="body2" className={styles.title}>{__tr("postedBy")}</Typography>
        {author && <Box className={styles.body}>
            <Box className={styles.author}>
                <Avatar className={styles.avatar} />
                <Box>
                    <Typography variant="body1" className={styles.name}>{author.name}</Typography>
                    <Typography variant="body2" className={styles.date}>{dateAsStr}</Typography>
                </Box>
            </Box>
            <Box className={styles.hiringRate}>
                <Typography variant="body2" className={styles.title}>100% Hiring rate</Typography>
                <UnmodifiableProgress progress={80} height={8} />
            </Box>
        </Box>}
    </Box>
}

function AboutBrand(props: SectionProps) {
    return <Box className={styles.aboutBrand}>
        <Typography variant="h6" className={styles.title}>About the Brand</Typography>
        <Typography variant="body2" className={styles.text}>
            Biba Apparels is an Indian fashion brand for women and girls founded by Meena Bindra in 1988
        </Typography>
    </Box>
}

function AboutCampaign(props: SectionProps) {
    return <Box className={styles.aboutCampaign}>
        <Typography variant="h6" className={styles.title}>About the campaign</Typography>
        <Typography variant="body2" className={styles.text}>
            BIBA ready-to-stitch line is a collection of handpicked fabrics from all over India which can be stitched as per one’s size and style. Crafted from fine silks, georgettes, premium chanderis and cotton and blended fabrics; this range is a perfect solution for casual wear, work wear and party-wear needs.
        </Typography>
    </Box>
}

function Deliverables(props: SectionProps) {

    const deliverables = useMemo(() => {
        if (props.campaign.Deliverables) {
            return props.campaign.Deliverables.map((d) => {
                return JSON.parse(d as string) as DeliverableWithCount
            })
        }
        return [];
    }, [props.campaign]);

    return <Box className={styles.deliverables}>
        <Typography variant="h6" className={styles.title}>Deliverables</Typography>
        <Box className={styles.body}>
            {
                deliverables.map((d) => {
                    return <Box key={d.deliverable} className={styles.deliverable}>
                        <Typography variant="body1" className={styles.count}>{padZero(d.count)}</Typography>
                        <Typography variant="body2" className={styles.tag}>{__tr(d.deliverable.toLowerCase())}</Typography>
                    </Box>
                })
            }
        </Box>
    </Box>
}

function WhoCanApply(props: SectionProps) {

    const followerRangeConstraints = useMemo(() => {
        return props.campaign.FollowerRanges || [];
    }, [props.campaign])

    const rangeToStr = useCallback((decoded: FollowerRange) => {
        if (decoded.lower && decoded.upper) {
            return __trParams("platform_followers_between", {
                platform: capitalize(props.campaign.Platform || ""),
                start: decoded.lower,
                end: decoded.upper
            })
        }
        if (decoded.lower) {
            return __trParams("platform_followers_above", {
                platform: capitalize(props.campaign.Platform || ""),
                start: decoded.lower,
            })
        }
        return "";
    }, [props.campaign])

    return <Box className={styles.whoCanApply}>
        <Typography variant="h6" className={styles.title}>Who can apply</Typography>
        <Box className={styles.body}>
            {
                followerRangeConstraints.map((range) => {
                    let decoded = JSON.parse(range || "") as FollowerRange;
                    return <Box key={range} className={styles.criteria}>
                        <span className={styles.iconSuccess}>
                            <MdDone fill='white' size={14} />
                        </span>
                        <Typography variant="body2" className={styles.text}>{rangeToStr(decoded)}</Typography>
                    </Box>
                })
            }
            <Box className={styles.criteria}>
                <span className={styles.iconSuccess}>
                    <MdDone fill='white' size={14} />
                </span>
                <Typography variant="body2" className={styles.text}></Typography>
            </Box>
            <Box className={styles.criteria}>
                <span className={styles.iconSuccess}>
                    <MdDone fill='white' size={14} />
                </span>
                <Typography variant="body2" className={styles.text}>Gender Female</Typography>
            </Box>
            <Box className={styles.criteria}>
                <span className={styles.iconSuccess}>
                    <MdDone fill='white' size={14} />
                </span>
                <Typography variant="body2" className={styles.text}>Age group: 20-30 years</Typography>
            </Box>
        </Box>
        <Box className={styles.tags}>
            {
                props.campaign.Categories?.map((cat) => {
                    return <Chip key={cat || ""} label={cat} className={styles.tag} />
                })
            }
        </Box>
    </Box>
}


function Openings(props: SectionProps) {
    return <Box className={styles.openings}>
        <Typography variant="h6" className={styles.title}>Openings</Typography>
        <Box className={styles.body}>
            <Box className={styles.criteria}>
                <span className={styles.iconSuccess}>
                    <MdDone fill='white' size={14} />
                </span>
                <Typography variant="body2" className={styles.text}>Total Slots: 50</Typography>
            </Box>
            <Box className={styles.criteria}>
                <span className={styles.iconSuccess}>
                    <MdDone fill='white' size={14} />
                </span>
                <Typography variant="body2" className={styles.text}>Filled Slots: 22</Typography>
            </Box>
            <Box className={styles.criteria}>
                <span className={styles.iconSuccess}>
                    <MdDone fill='white' size={14} />
                </span>
                <Typography variant="body2" className={styles.text}>Applicants: 22</Typography>
            </Box>
        </Box>
    </Box>
}

export function CampaignDetails() {
    const { campaign } = useCampaignContext();

    return <Box className={styles.page}>
        <CampaignHeader campaign={campaign} />
        <CampaignPostedBy campaign={campaign} />
        <Box>
            <AboutBrand campaign={campaign} />
            <AboutCampaign campaign={campaign} />
            <Deliverables campaign={campaign} />
            <WhoCanApply campaign={campaign} />
            <Openings campaign={campaign} />
        </Box>
        <Box paddingX={4} paddingY={2}>
            <TextTransformNoneButton variant="contained" color="primary" size="large">Apply Now</TextTransformNoneButton>
        </Box>
    </Box>
}