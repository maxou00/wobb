import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { css } from "@emotion/css";
import { CssVariables } from "../css-variables";
import { useUrlFilter } from "./hooks";

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
    tabBadge: css`
        background: ${CssVariables.colorGrayV2};
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 10px;
    `
}

export function ApplicantsFilterTab() {
    const location = useLocation();
    const history = useHistory();
    const status = useUrlFilter("received");

    const navigate = useCallback((filter: string) => {
        if (status !== filter) {
            history.push(Routes.viewCampaignApplicants('a-simple-id', filter));
        }
    }, [history, status]);

    const isActive = useCallback((filter: string) => {
        return status === filter;
    }, [status]);

    return <div className={styles.tabs}>
        <div onClick={() => navigate("received")} data-active={isActive("received")} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr("received")}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>122</span></div>
        </div>
        <div onClick={() => navigate("shortlisted")} data-active={isActive("shortlisted")} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr("shortlisted")}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>122</span></div>
        </div>
        <div onClick={() => navigate("hired")} data-active={isActive("hired")} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr("hired")}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>122</span></div>
        </div>
        <div onClick={() => navigate("rejected")} data-active={isActive("rejected")} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr("rejected")}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>122</span></div>
        </div>
        <div onClick={() => navigate("invite")} data-active={isActive("invite")} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr("invite")}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>122</span></div>
        </div>
    </div>
}