import { css } from "@emotion/css"
import { Paper } from "@material-ui/core"
import { MdLink } from "react-icons/md"
import { Link } from "react-router-dom"
import { IconCash, IconCoins, IconPlatform } from "../components/Icons"
import { CssVariables } from "../css-variables"
import { __tr } from "../i18n"

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

export function CampaignRow() {
    return <Paper elevation={1}>
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td rowSpan={2} align="center" className={styles.cell}>
                            <div className={styles.img}></div>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.campaignTitle}>Earn with Wobb</span>
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
                            <Link to="/" className={styles.campaignLink}>
                                <span className="url">Wobb.ai</span>
                                <span className="icon">
                                    <MdLink size={16} />
                                </span>
                            </Link>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.contentValue}>Youtube</span>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.contentValue}>Rs5000</span>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.contentValue}>1000</span>
                        </td>
                        <td className={styles.cell} align="center">
                            <Link to="/" className={styles.campaignActionLink}>{__tr("viewDetails")}</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className={styles.badge}>active</span>
        </div>
    </Paper>
}