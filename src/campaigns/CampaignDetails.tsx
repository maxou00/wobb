import { Avatar, Box, Chip, Typography } from "@material-ui/core";
import { MdDone, MdLink } from "react-icons/md";
import { Link } from "react-router-dom";
import { IconCash, IconPlatform } from "../components/Icons";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { UnmodifiableProgress } from "../components/UnmodifiableProgress";
import { __tr } from "../i18n";
import styles from "../styles/CampaignDetails.module.scss";

function CampaignHeader() {
    return <Box className={styles.header}>
        <Box className={styles.campaign}>
            <Avatar className={styles.img} />
            <Box className={styles.text}>
                <Typography variant="body1" className={styles.title}>Earn with wobb</Typography>
                <Link to="/" className={styles.link}>wobb.ai<MdLink size={24} /> </Link>
            </Box>
        </Box>
        <Box className={styles.data}>
            <Box className={styles.head}>
                <IconPlatform size={24} />
                <Typography variant="body1" className={styles.key}>{__tr("platform")}</Typography>
            </Box>
            <Typography variant="body1" className={styles.value}>Youtube</Typography>
        </Box>
        <Box className={styles.data}>
            <Box className={styles.head}>
                <IconCash size={24} />
                <Typography variant="body1" className={styles.key}>{__tr("cash")}</Typography>
            </Box>
            <Typography variant="body1" className={styles.value}>Rs 5,000</Typography>
        </Box>
        <Box className={styles.data}>
            <Box className={styles.head}>
                <IconCash size={24} />
                <Typography variant="body1" className={styles.key}>{__tr("wobbCoins")}</Typography>
            </Box>
            <Typography variant="body1" className={styles.value}>1,000</Typography>
        </Box>
        <Box className={styles.badge}>
            <Typography variant="body2">Active</Typography>
        </Box>
    </Box>
}

export function CampaignPostedBy() {
    return <Box className={styles.postedBy}>
        <Typography variant="body2" className={styles.title}>{__tr("postedBy")}</Typography>
        <Box className={styles.body}>
            <Box className={styles.author}>
                <Avatar className={styles.avatar} />
                <Box>
                    <Typography variant="body1" className={styles.name}>John Doe</Typography>
                    <Typography variant="body2" className={styles.date}>23 June, 2021</Typography>
                </Box>
            </Box>
            <Box className={styles.hiringRate}>
                <Typography variant="body2" className={styles.title}>100% Hiring rate</Typography>
                <UnmodifiableProgress progress={80} height={8} />
            </Box>
        </Box>
    </Box>
}

function AboutBrand() {
    return <Box className={styles.aboutBrand}>
        <Typography variant="h6" className={styles.title}>About the Brand</Typography>
        <Typography variant="body2" className={styles.text}>
            Biba Apparels is an Indian fashion brand for women and girls founded by Meena Bindra in 1988
        </Typography>
    </Box>
}

function AboutCampaign() {
    return <Box className={styles.aboutCampaign}>
        <Typography variant="h6" className={styles.title}>About the campaign</Typography>
        <Typography variant="body2" className={styles.text}>
            BIBA ready-to-stitch line is a collection of handpicked fabrics from all over India which can be stitched as per one’s size and style. Crafted from fine silks, georgettes, premium chanderis and cotton and blended fabrics; this range is a perfect solution for casual wear, work wear and party-wear needs.
        </Typography>
    </Box>
}

function Deliverables() {
    return <Box className={styles.deliverables}>
        <Typography variant="h6" className={styles.title}>Deliverables</Typography>
        <Box className={styles.body}>
            <Box className={styles.deliverable}>
                <Typography variant="body1" className={styles.count}>1</Typography>
                <Typography variant="body2" className={styles.tag}>Post</Typography>
            </Box>
            <Box className={styles.deliverable}>
                <Typography variant="body1" className={styles.count}>2</Typography>
                <Typography variant="body2" className={styles.tag}>Stories</Typography>
            </Box>
        </Box>
    </Box>
}

function WhoCanApply() {
    return <Box className={styles.whoCanApply}>
        <Typography variant="h6" className={styles.title}>Who can apply</Typography>
        <Box className={styles.body}>
            <Box className={styles.criteria}>
                <span className={styles.iconSuccess}>
                    <MdDone fill='white' size={14} />
                </span>
                <Typography variant="body2" className={styles.text}>Instagram influencers with followers above 2M</Typography>
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
            <Chip label="Fashion" className={styles.tag} />
            <Chip label="Lifestyle" className={styles.tag} />
            <Chip label="Luxury" className={styles.tag} />
        </Box>
    </Box>
}


function Openings() {
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
    return <Box className={styles.page}>
        <CampaignHeader />
        <CampaignPostedBy />
        <Box>
            <AboutBrand />
            <AboutCampaign />
            <Deliverables />
            <WhoCanApply />
            <Openings />
        </Box>
        <Box paddingX={4} paddingY={2}>
            <TextTransformNoneButton variant="contained" color="primary" size="large">Apply Now</TextTransformNoneButton>
        </Box>
    </Box>
}