import { css } from "@emotion/css"
import { Paper } from "@material-ui/core"
import { yellow } from "@material-ui/core/colors"
import { useCallback } from "react"
import { TextTransformNoneButton } from "../components/TextTransformNoneButton"
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
    influencerName: css`
        font-size: ${CssVariables.fontSizeTextPrimary};
        font-weight: 700;
        color: ${CssVariables.colorGrayV3};
        cursor: pointer;
    `,
    rating: css`
        font-size: ${CssVariables.fontSizeAnySmall};
        color: ${CssVariables.colorPrimary};
        font-weight: 600;
        text-align: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `,
    averageStar: css`
        color: ${yellow[600]};
        white-space: nowrap;
    `,
    star: css`
        font-size: 18px;
        color: ${yellow[600]};
    `,
    ratingCount: css`
        color: ${CssVariables.colorGrayV2};
        font-weight: 300;
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
    influencerActionLink: css`
        color: ${CssVariables.colorPrimary};
        text-decoration: none;
        font-weight: 600;
        font-size: ${CssVariables.fontSizeAnySmall};
    `
}

interface RowProps {
    onShowProfile?(): any;
}

export function InfluencerRow(props: RowProps) {

    const handleInfluencerClick = useCallback(() => {
        if(props.onShowProfile) {
            props.onShowProfile();
        }
    }, [props]);

    return <Paper elevation={1}>
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td rowSpan={2} align="center" className={styles.cell}>
                            <div className={styles.img}></div>
                        </td>
                        <td className={styles.cell} onClick={handleInfluencerClick}>
                            <span className={styles.influencerName}>Influencer name</span>
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.contentHeaderCell}>
                                <span className={styles.contentKey}>
                                    {__tr("followers")}
                                </span>
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.contentHeaderCell}>
                                <span className={styles.contentKey}>{__tr("engagementRate")}</span>
                            </div>
                        </td>
                        <td className={styles.cell}></td>
                        <td className={styles.cell} rowSpan={2} align="center">
                            <TextTransformNoneButton color="primary" variant="text" className={styles.influencerActionLink}>{__tr("message")}</TextTransformNoneButton>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.cell} >
                            <div className={styles.rating}>
                                <span className={styles.averageStar}>4.0</span>
                                <span className={styles.star}>★</span>
                                <span className={styles.ratingCount}>(23)</span>
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.contentValue}>218K</span>
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.contentValue}>4.5%</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Paper>
}