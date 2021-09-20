import { DataStore } from "@aws-amplify/datastore";
import { Box } from "@material-ui/core";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { PropagateLoader } from "react-spinners";
import { CssVariables } from "../css-variables";
import { Campaign } from "../models";
import { Routes } from "../routes";
import { TaskView } from "../tasks/TaskView";
import { SingleCampaign } from "./SingleCampaign";
import { ViewApplicants } from "./ViewApplicants";

export interface SubCampaignRouteProps {
    campaign: Campaign;
    onUpdated?(update: Campaign): any;
}

const CampaignContext = createContext<{ campaign: Campaign, onChange(update?: Campaign): any }>({} as any);

export function useCampaignContext() {
    return useContext(CampaignContext);
}


export function ViewCampaign() {
    const [campaign, setCampaign] = useState<Campaign>();
    const match = useRouteMatch();

    const fetchCampaign = useCallback(() => {
        let id = (match.params as any).id
        DataStore.query(Campaign, c => c.id("eq", id))
            .then((result) => {
                if (result.length > 0) {
                    setCampaign(result[0]);
                }
            })
    }, [match]);

    const onCampaignChanged = useCallback((camp: Campaign) => {
        fetchCampaign();
    }, []);


    useEffect(() => {
        fetchCampaign();
    }, [fetchCampaign]);

    return <div>
        {!campaign &&
            <Box width="100%" height="320px">
                <PropagateLoader size="18px" color={CssVariables.colorPrimary} />
            </Box>
        }
        {campaign && <CampaignContext.Provider value={{
            campaign,
            onChange: onCampaignChanged
        }}>
            <Switch>
                <Route path={Routes.viewCampaignApplicants(":id")}>
                    <ViewApplicants />
                </Route>
                <Route path={Routes.viewCampaignTasks(":id")}>
                    <TaskView />
                </Route>
                <Route path={Routes.viewCampaign(":id")} exact>
                    <SingleCampaign />
                </Route>
            </Switch>
        </CampaignContext.Provider>}
    </div>
}