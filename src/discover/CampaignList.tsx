import { css } from "@emotion/css";
import { CampaignRow } from "./CampaignRow";
import campaigns from "../core/api/campaigns.json";

const listStyles = css``;

export function CampaignList() {
    return <div className={listStyles}>
        {
            campaigns.map((c) => {
                return <CampaignRow campaign={c} key={c.id}/>
            })
        }
    </div>
}