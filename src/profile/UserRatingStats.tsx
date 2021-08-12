import { css } from "@emotion/css";
import { Box, Typography } from "@material-ui/core";
import { Stars } from "../components/Stars";
import { UnmodifiableProgress } from "../components/UnmodifiableProgress";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";
import { ContentRow } from "./ContentRow";

const styles = {
    tableContainer: css`
        width: 100%;
    `,
    cellProgress: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    progress: css`
        width: 64px;
        margin-right: 4px;
    `,
    percent: css`
        font-size: ${CssVariables.fontSizeBodyText};
        font-weight: 500;
    `,
    hour: css`
        font-weight: bold !important;
        color: ${CssVariables.colorPrimary};
    `,
    key: css``,
    value: css``
}


export function UserRatingStats() {
    return <Box>
        <Box marginY={2} className={styles.tableContainer}>
            <ContentRow>
                <Typography variant="body1" className={styles.key} style={{ fontWeight: 600 }}>{__tr("ratingAsInfluencer")}</Typography>
                <div className={styles.cellProgress}>
                    <span><Stars count={4.1} /> (100)</span>
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
                    <span><Stars count={4.1} /> (125)</span>
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
    </Box>
}