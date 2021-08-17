import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { css } from "@emotion/css";
import { CssVariables } from "../css-variables";
import { useUrlQuery } from "../core/hooks";

const styles = {
    tabs: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    tab: css`
        min-width: 120px;
        text-align: center;
        padding: 16px 24px;
        font-weight: 600;
        text-decoration: none;
        color: ${CssVariables.colorGrayV2};
        font-size: ${CssVariables.fontSizeTextPrimary};
        border-bottom: 4px solid ${CssVariables.colorGrayV1};
        transition: all .3s linear;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        &[data-active = true] {
            color: ${CssVariables.colorPrimary};
            border-bottom-color: ${CssVariables.colorPrimary};

            *[data-role = badge] {
                background-color: ${CssVariables.colorPrimary};
            }
        }
    `,
    tabTitle: css`
        padding: 0px 8px;
    `,
}

export function DiscoverTab() {
    const history = useHistory();
    const filter = useUrlQuery("filter", "campaigns");

    const navigate = useCallback((tag: string) => {
        if (filter !== tag) {
            history.push(Routes.discoverWithFilter(tag));
        }
    }, [history, filter]);

    const isActive = useCallback((tag: string) => {
        return filter === tag;
    }, [filter]);

    return <div className={styles.tabs}>
        <div onClick={() => navigate("campaigns")} data-active={isActive("campaigns")} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr("campaigns")}
            </span>
        </div>
        <div onClick={() => navigate("influencers")} data-active={isActive("influencers")} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr("influencers")}
            </span>
        </div>
    </div>
}