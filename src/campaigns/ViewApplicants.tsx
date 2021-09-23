import { Box } from "@material-ui/core";
import { ApplicantsFilterTab } from "./ApplicantsFilterTab";
import { Applicants } from "./Applicants";
import { Jobs } from "../models";
import { useProvidedCampaign } from "./ViewCampaign";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { InfluencerFilter } from "../components/InfluencerFilterUi";
import { DataStore } from "aws-amplify";
import { OpType } from "@aws-amplify/datastore";

interface ApplicantsContextScheme {
    busy: boolean;
    applicants: Jobs[];
    filter?: InfluencerFilter;
    refresh(): any;
    setFilter(next: InfluencerFilter): any;
}

const ApplicantsContext = createContext<ApplicantsContextScheme>({} as any);

export function useProvidedApplicants() {
    return useContext(ApplicantsContext);
}

export function ProvideApplicants(props: PropsWithChildren<ApplicantsContextScheme>) {
    return <ApplicantsContext.Provider value={{
        busy: props.busy,
        applicants: props.applicants,
        filter: props.filter,
        refresh: props.refresh,
        setFilter: props.setFilter
    }}>
        {props.children}
    </ApplicantsContext.Provider>
}

const applicationReducer = (state: {applicants: Jobs[]} = {applicants: []}, action: {type: string, payload: any}) => {
    if(action.type === "set_applicants") {
        return {applicants: action.payload}
    }
    else if(action.type === "add_applicant") {
        let items = [...state.applicants]
        let foundIndex = items.findIndex((a) => a.id === action.payload.id);
        if(foundIndex >= 0) {
            items[foundIndex] = action.payload;
        }
        else {
            items.push(action.payload);
        }
        return {
            applicants: items
        }
    }
    else if(action.type === "remove_applicant") {
        let items = state.applicants.filter((a) => a.id !== action.payload.id);
        return {
            applicants: items
        }
    }
    return state;
}

/**
 * This component manages applicants list using useReducer 
 * because relying on Datastore, it watches changes and every update or deletion 
 * or any similar action launches and update of the state, which may require a large set of hook dependency, 
 * it may causes hooks to run more than once. 
 * I thought dispatching call to actions will be a better fit in this case.
 * @returns 
 */

export function ViewApplicants() {
    const [busy, setBusy] = useState(false);
    const { campaign } = useProvidedCampaign();
    const [{applicants}, update] = useReducer(applicationReducer, {applicants: []});

    const [filter, setFilter] = useState<InfluencerFilter>();

    const fetchApplicants = useCallback(async( ) => {
        setBusy(true);
        DataStore.query(Jobs, j => j.campaignID("eq", campaign.id))
        .then((rs) => {
            update({
                type: 'set_applicants',
                payload: rs
            })
        })
        .finally(() => {
            setBusy(false)
        })
    }, [campaign.id]);

    useEffect(() => {
        fetchApplicants();
        let subscription = DataStore.observe(Jobs, j => j.campaignID("eq", campaign.id)).subscribe(async (value) => {
            if(value.opType === OpType.INSERT) {
                let completeObject = (await DataStore.query(Jobs, j => j.id("eq", value.element.id)))[0];
                update({
                    type: 'add_applicant',
                    payload: completeObject
                })
            }
            else if(value.opType === OpType.UPDATE) {
                let completeObject = (await DataStore.query(Jobs, j => j.id("eq", value.element.id)))[0];
                update({
                    type: 'add_applicant',
                    payload: completeObject
                })
            }
            else if(value.opType === OpType.DELETE) {
                update({
                    type: 'remove_applicant',
                    payload: value.element
                })
            }
        })

        return () => {
            subscription.unsubscribe();
        }
    }, [campaign.id]);

    return <ProvideApplicants 
        busy={busy} 
        refresh={fetchApplicants} 
        applicants={applicants}
        filter={filter}
        setFilter={setFilter}>

        <Box paddingX={4}>
            <Box marginY={6}>
                <ApplicantsFilterTab />
            </Box>
            <Box marginY={2}>
                <Applicants />
            </Box>
        </Box>

    </ProvideApplicants>
}