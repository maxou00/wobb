import { Route, Switch } from "react-router";
import { Routes } from "../routes";
import { TaskView } from "../tasks/TaskView";
import { SingleCampaign } from "./SingleCampaign";
import { ViewApplicants } from "./ViewApplicants";

export function ViewCampaign() {
    return <div>
        <Switch>
            <Route path={Routes.viewCampaignApplicants("a-simple-id")}>
                <ViewApplicants />
            </Route>
            <Route path={Routes.viewCampaignTasks("a-simple-id")}>
                <TaskView />
            </Route>
            <Route path={Routes.viewCampaign("a-simple-id")} exact>
                <SingleCampaign />
            </Route>
        </Switch>
    </div>
}