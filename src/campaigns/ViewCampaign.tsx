import { Route, Switch } from "react-router";
import { Routes } from "../routes";
import { SingleCampaign } from "./SingleCampaign";
import { ViewApplicants } from "./ViewApplicants";

export function ViewCampaign() {
    return <div>
        <Switch>
            <Route path={Routes.viewCampaignApplicants("a-simple-id")}>
                <ViewApplicants />
            </Route>
            <Route path={Routes.viewCampaign(":id")}>
                <SingleCampaign />
            </Route>
        </Switch>
    </div>
}