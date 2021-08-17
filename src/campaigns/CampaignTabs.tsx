import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/CampaignTabs.module.scss";
import classNames from "classnames";
import { useUrlFilter } from "../core/hooks";

export function CampaignTabs() {
    const history = useHistory();
    const status = useUrlFilter("applied");

    const navigate = useCallback((filter: string) => {
        if(status !== filter) {
            history.push(Routes.campaigns(filter));
        }
    }, [history, status]);

    return <div className={styles.campaignTabs}>
        <div onClick={() => navigate("applied")} className={classNames({[styles.campaignTab]: true, [styles.activeCampaignTab]: status === "applied"})}>
            {__tr("applied")}
        </div>
        <div onClick={() => navigate("posted")} className={classNames({[styles.campaignTab]: true, [styles.activeCampaignTab]: status === "posted"})}>
            {__tr("posted")}
        </div>
    </div>
}