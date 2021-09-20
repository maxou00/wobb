import { css } from "@emotion/css";
import { CampaignRow } from "./CampaignRow";
import { Campaign } from "../models";
import { __tr } from "../i18n";

const listStyles = css``;

export function CampaignList(props: {campaigns: Campaign[]}) {

    return <div className={listStyles}>
        {
            props.campaigns.map((c) => {
                return <CampaignRow campaign={c} key={c.id} />
            })
        }
    </div>
}