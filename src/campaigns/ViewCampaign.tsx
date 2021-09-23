import { DataStore, OpType } from "@aws-amplify/datastore";
import { Box } from "@material-ui/core";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";
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

const CampaignContext = createContext<{ campaign: Campaign, onRefresh(update?: Campaign): any }>({} as any);

export function useProvidedCampaign() {
    return useContext(CampaignContext);
}

export function ProvideCampaign(props: PropsWithChildren<{ campaign: Campaign, onRefresh: () => any }>) {
    return <CampaignContext.Provider value={{
        campaign: props.campaign,
        onRefresh: props.onRefresh
    }}>
        {
            props.children
        }
    </CampaignContext.Provider>
}


export function ViewCampaign() {
    const [campaign, setCampaign] = useState<Campaign>();
    const [busy, setBusy] = useState(false);

    const { id } = useRouteMatch().params as any;

    const fetchCampaign = useCallback(() => {
        setBusy(true);
        DataStore.query(Campaign, c => c.id("eq", id))
            .then((result) => {
                if (result.length > 0) {
                    setCampaign(result[0]);
                }
            })
            .finally(() => {
                setBusy(false);
            })
    }, [id]);

    const onCampaignChanged = useCallback((camp?: Campaign) => {
        fetchCampaign();
    }, [fetchCampaign]);

    useEffect(() => {
        fetchCampaign();
        let subscription = DataStore.observe(Campaign, c => c.id("eq", id)).subscribe((value) => {
            if(value.opType === OpType.UPDATE) {
                setCampaign(value.element);
            }
        })

        return () => {
            subscription.unsubscribe();
        }
    }, [fetchCampaign, id]);

    return <div>
        {(!campaign && busy) &&
            <Box width="100%" height="320px" display="flex" flexDirection="row" alignItems="center"justifyContent="center">
                <PropagateLoader size="12px" color={CssVariables.colorPrimary} />
            </Box>
        }
        {campaign && <ProvideCampaign campaign={campaign} onRefresh={onCampaignChanged}>
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
        </ProvideCampaign>}
    </div>
}