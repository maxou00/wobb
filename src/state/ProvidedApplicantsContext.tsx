import { createContext, PropsWithChildren, useContext } from "react";
import { InfluencerFilter } from "../components/InfluencerFilterUi";
import { Jobs } from "../models";

interface ApplicantsContextScheme {
    busy: boolean;
    applicants: Jobs[];
    filter?: InfluencerFilter;
    selected: Jobs[];
    refresh(): any;
    setFilter(next: InfluencerFilter): any;
    selectApplicants(...applicants: Jobs[]): any;
    unselectApplicants(...applicants: Jobs[]): any;
}

const ApplicantsContext = createContext<ApplicantsContextScheme>({} as any);

export function useProvidedApplicants() {
    return useContext(ApplicantsContext);
}

export function useApplicantSelection(id: string) {
    return useProvidedApplicants().selected.find((app) => app.id === id)
}

export function useApplicantSelectionFuncs() {
    let apps = useProvidedApplicants()
    return  { select: apps.selectApplicants, unselect: apps.unselectApplicants }
}

export enum ApplicantProviderAction {
    set_applicants = "set_applicants",
    add_applicant = "add_applicant",
    remove_applicant = "remove_applicant",

    select_applicants = "select_applicants",
    unselect_applicants = "unselect_applicants",
}

export const applicationReducer = (state: { applicants: Jobs[], selected: Jobs[] } = { applicants: [], selected: [] }, action: { type: string, payload: any }) => {
    if (action.type === ApplicantProviderAction.set_applicants) {
        return { ...state, applicants: action.payload }
    }
    else if (action.type === ApplicantProviderAction.add_applicant) {
        let items = [...state.applicants]
        let foundIndex = items.findIndex((a) => a.id === action.payload.id);
        if (foundIndex >= 0) {
            items[foundIndex] = action.payload;
        }
        else {
            items.push(action.payload);
        }
        return {
            ...state,
            applicants: items
        }
    }
    else if (action.type === ApplicantProviderAction.remove_applicant) {
        let items = state.applicants.filter((a) => a.id !== action.payload.id);
        return {
            ...state,
            applicants: items
        }
    }
    else if (action.type === ApplicantProviderAction.select_applicants) {
        let items = [...state.selected]

        let nextJobs: Jobs[] = action.payload
        nextJobs.forEach((job) => {
            let foundIndex = items.findIndex((a) => a.id === job.id);
            if (foundIndex >= 0) {
                items[foundIndex] = job;
            }
            else {
                items.push(job);
            }
        })
        return {
            ...state,
            selected: items
        }
    }
    else if (action.type === ApplicantProviderAction.unselect_applicants) {
        let items = [...state.selected]

        let unselected: Jobs[] = action.payload
        unselected.forEach((job) => {
            let foundIndex = items.findIndex((a) => a.id === job.id);
            if (foundIndex >= 0) {
                items.splice(foundIndex,1)
            }
        })
        return {
            ...state,
            selected: items
        }
    }
    return state;
}


export function ProvideApplicants(props: PropsWithChildren<ApplicantsContextScheme>) {
    return <ApplicantsContext.Provider value={{
        busy: props.busy,
        applicants: props.applicants,
        selected: props.selected,
        filter: props.filter,
        refresh: props.refresh,
        setFilter: props.setFilter,
        selectApplicants: props.selectApplicants,
        unselectApplicants: props.unselectApplicants
    }}>
        {props.children}
    </ApplicantsContext.Provider>
}
