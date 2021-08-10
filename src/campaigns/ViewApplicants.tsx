import { Box } from "@material-ui/core";
import { ApplicantsFilterTab } from "./ApplicantsFilterTab";
import { Applicants } from "./Applicants";

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