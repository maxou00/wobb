import { css } from "@emotion/css"
import { Paper } from "@material-ui/core"
import { useMemo } from "react"
import { MdLink } from "react-icons/md"
import { Link } from "react-router-dom"
import { IconCash, IconCoins, IconPlatform } from "../components/Icons"
import { Payout } from "../core"
import { CssVariables } from "../css-variables"
import { __tr } from "../i18n"
import { CampaignStatus } from "../models"
import { Campaign, PayoutType } from "../models"
import { Routes } from "../routes"

const styles = {
    wrapper: css`
        padding: 16px;
        margin-bottom: 8px;
        background: white;
        border-radius: 4px;
        position: relative;
    `,
    table: css`
        width: 100%;
    `,
    cell: css`
        padding: 0px 8px;
    `,
    img: css`
        width: 46px;
        height: 46px;
        border-radius: 100%;
        background: red;
    `,
    campaignTitle: css`
        font-size: ${CssVariables.fontSizeTextPrimary};
        font-weight: 700;
        color: ${CssVariables.colorGrayV3};
    `,
    campaignLink: css`
        font-size: ${CssVariables.fontSizeAnySmall};
        color: ${CssVariables.colorPrimary};
        font-weight: 600;
        text-align: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `,
    contentHeaderCell: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `,
    contentIcon: css`
        margin: 0px 4px;
    `,
    contentKey: css`
        color: ${CssVariables.colorGrayV2};
        font-size: ${CssVariables.fontSizeBodyText};
        text-transform: uppercase;
        font-weight: 300;
    `,
    contentValue: css`
        fontSize: ${CssVariables.fontSizeBodyText};
        font-weight: 400;
        color: ${CssVariables.colorGrayV3};
    `,
    campaignActionLink: css`
        color: ${CssVariables.colorPrimary};
        text-decoration: none;
        font-weight: 600;
        font-size: ${CssVariables.fontSizeAnySmall};
    `,
    badge: css`
        position: absolute;
        background: ${CssVariables.colorSuccess};
        color: white;
        font-size: 12px;
        padding: 4px 8px;
        top: 10px;
        right: 0;
        border-top-left-radius: 46px;
        border-bottom-left-radius: 46px;
    `
}

export function CampaignRow(props: {campaign: Campaign}) {
    const payout = useMemo(() => {
        if(props.campaign.Payout) {
            return JSON.parse(props.campaign.Payout) as Payout;
        }
        return undefined;
    }, [props]);

    const currency = useMemo(() => {
        if(payout?.type === PayoutType.FIXED) {
            return payout.cash.currency;
        }
        if(payout?.type === PayoutType.VARIABLE) {
            return payout.maxCash.currency;
        }
        if(payout?.type === PayoutType.BARTER) {
            return payout.productMRP.currency;
        }
        return undefined;
    }, [payout]);

    const amount = useMemo(() => {
        if(payout?.type === PayoutType.FIXED) {
            return payout.cash.amount;
        }
        if(payout?.type === PayoutType.VARIABLE) {
            return payout.maxCash.amount;
        }
        if(payout?.type === PayoutType.BARTER) {
            return payout.productMRP.amount;
        }
        return undefined;
    }, [payout]);

    const isActive = useMemo(() => {
        return props.campaign.CampaignStatus === CampaignStatus.PUBLISHED
    }, [props.campaign]);

    return <Paper elevation={1}>
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td rowSpan={2} align="center" className={styles.cell}>
                            <div className={styles.img}></div>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.campaignTitle}>{props.campaign.Name}</span>
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.contentHeaderCell}>
                                <span className={styles.contentIcon}>
                                    <IconPlatform size={16} />
                                </span>
                                <span className={styles.contentKey}>
                                    {__tr("platform")}
                                </span>
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.contentHeaderCell}>
                                <span className={styles.contentIcon}>
                                    <IconCash size={16} />
                                </span>
                                <span className={styles.contentKey}>{__tr("cash")}</span>
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.contentHeaderCell}>
                                <span className={styles.contentIcon}>
                                    <IconCoins size={16} />
                                </span>
                                <span className={styles.contentKey}>{__tr("coins")}</span>
                            </div>
                        </td>
                        <td className={styles.cell}></td>
                    </tr>
                    <tr>
                        <td className={styles.cell} >
                            <Link to={props.campaign.Brand?.website || "/"} className={styles.campaignLink}>
                                <span className="url">{props.campaign.Brand?.name || ""}</span>
                                <span className="icon">
                                    <MdLink size={16} />
                                </span>
                            </Link>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.contentValue}>{props.campaign.Platform}</span>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.contentValue}>{currency || ""} {amount || "-"}</span>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.contentValue}>{/** There is no coin property in the campaigns. maybe there is an equivalence to be set, mapping fiat currencies to coins. */}</span>
                        </td>
                        <td className={styles.cell} align="center">
                            <Link to={Routes.viewCampaign(props.campaign.id)} className={styles.campaignActionLink}>{__tr("viewDetails")}</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            {isActive && <span className={styles.badge}>{__tr("active")}</span>}
        </div>
    </Paper>
}