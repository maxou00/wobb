import { Route, Switch } from "react-router";
import { Routes } from "../routes";
import { ViewApplicants } from "./ViewApplicants";

export function ViewCampaign() {
    return <div>
        <Switch>
            <Route path={Routes.viewCampaignApplicants("a-simple-id")}>
                <ViewApplicants />
            </Route>
        </Switch>
    </div>
}