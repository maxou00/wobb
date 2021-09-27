import { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import { css } from "@emotion/css";
import { CssVariables } from "../css-variables";
import { useUrlFilter } from "../core/hooks";
import { useProvidedCampaign } from "./ViewCampaign";
import { padZero } from "../core/utils";
import { JobStatus } from "../models";
import { Tab, Tabs } from "@material-ui/core";
import { useProvidedApplicants } from "../state/ProvidedApplicantsContext";

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

export enum ApplicantFilter {
    received = "received",
    shortlisted = "shortlisted",
    hired = "hired",
    rejected = "rejected",
    invited = "invited"
}

export function ApplicantsFilterTab() {
    const { campaign } = useProvidedCampaign();
    const { applicants } = useProvidedApplicants();

    const history = useHistory();
    const status = useUrlFilter(ApplicantFilter.received);

    const navigate = useCallback((filter: string) => {
        if (status !== filter) {
            history.push(Routes.viewCampaignApplicants(campaign.id, filter));
        }
    }, [campaign.id, history, status]);

    const isActive = useCallback((filter: string) => {
        return status === filter;
    }, [status]);

    const received = useMemo(() => {
        return applicants.filter((a) => !Boolean(a.status)).length
    }, [applicants]);

    const shortListed = useMemo(() => {
        return applicants.filter((a) => a.status === JobStatus.SHORT_LISTED).length
    }, [applicants]);

    const hired = useMemo(() => {
        return applicants.filter((a) => a.status === JobStatus.HIRED).length
    }, [applicants]);

    const rejected = useMemo(() => {
        return applicants.filter((a) => a.status === JobStatus.REJECTED).length
    }, [applicants]);

    return <div className={styles.tabs}>
        <div onClick={() => navigate(ApplicantFilter.received)} data-active={isActive(ApplicantFilter.received)} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr(ApplicantFilter.received)}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>{padZero(received)}</span></div>
        </div>
        <div onClick={() => navigate(ApplicantFilter.shortlisted)} data-active={isActive(ApplicantFilter.shortlisted)} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr(ApplicantFilter.shortlisted)}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>{padZero(shortListed)}</span></div>
        </div>
        <div onClick={() => navigate(ApplicantFilter.hired)} data-active={isActive(ApplicantFilter.hired)} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr(ApplicantFilter.hired)}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>{padZero(hired)}</span></div>
        </div>
        <div onClick={() => navigate(ApplicantFilter.rejected)} data-active={isActive(ApplicantFilter.rejected)} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr(ApplicantFilter.rejected)}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>{padZero(rejected)}</span></div>
        </div>
        <div onClick={() => navigate(ApplicantFilter.invited)} data-active={isActive(ApplicantFilter.invited)} className={styles.tab}>
            <span data-role="title" className={styles.tabTitle}>
                {__tr(ApplicantFilter.invited)}
            </span>
            <div data-role="badge" className={styles.tabBadge}><span>?</span></div>
        </div>
    </div>
}