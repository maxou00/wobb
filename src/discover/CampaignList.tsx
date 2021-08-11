import { css } from "@emotion/css";
import { CampaignRow } from "./CampaignRow";

const listStyles = css``;

export function CampaignList() {
    return <div className={listStyles}>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
        <CampaignRow/>
    </div>
}