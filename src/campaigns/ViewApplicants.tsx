import { Box } from "@material-ui/core";
import { ApplicantsFilterTab } from "./ApplicantsFilterTab";
import { Applicants } from "./Applicants";
import { Jobs } from "../models";
import { useProvidedCampaign } from "./ViewCampaign";
import { useCallback, useEffect, useReducer, useState } from "react";
import { InfluencerFilter } from "../components/InfluencerFilterUi";
import { DataStore } from "aws-amplify";
import { OpType } from "@aws-amplify/datastore";
import { ApplicantProviderAction, applicationReducer, ProvideApplicants } from "../state/ProvidedApplicantsContext";

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
    const [{ applicants, selected }, update] = useReducer(applicationReducer, { applicants: [], selected: [] });

    const [filter, setFilter] = useState<InfluencerFilter>();

    const fetchApplicants = useCallback(async () => {
        setBusy(true);
        DataStore.query(Jobs, j => j.campaignID("eq", campaign.id))
            .then((rs) => {
                update({
                    type: ApplicantProviderAction.set_applicants,
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
            if ([OpType.INSERT, OpType.UPDATE].includes(value.opType)) {
                let completeObject = (await DataStore.query(Jobs, j => j.id("eq", value.element.id)))[0];
                update({
                    type: ApplicantProviderAction.add_applicant,
                    payload: completeObject
                })
            }
            else if (value.opType === OpType.DELETE) {
                update({
                    type: ApplicantProviderAction.remove_applicant,
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
        selected={selected}
        filter={filter}
        setFilter={setFilter}
        selectApplicants = {(...apps) => {
            update({
                type: ApplicantProviderAction.select_applicants,
                payload: apps
            })
        }}
        unselectApplicants = {(...apps) => {
            update({
                type: ApplicantProviderAction.unselect_applicants,
                payload: apps
            })
        }}>

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