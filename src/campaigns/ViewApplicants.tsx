import { Box } from "@material-ui/core";
import { ApplicantsFilterTab } from "./ApplicantsFilterTab";
import { Applicants } from "./Applicants";
import { Campaign } from "../models";
import { SubCampaignRouteProps } from "./ViewCampaign";

export function ViewApplicants() {
    return <Box paddingX={4}>
        <Box marginY={6}>
            <ApplicantsFilterTab />
        </Box>
        <Box marginY={2}>
            <Applicants />
        </Box>
    </Box>
}