import { Box, Divider, Typography } from "@material-ui/core";
import { IconFilter } from "../components/Icons";
import { InfluencerFilterUi } from "../components/InfluencerFilterUi";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";

export function InfluencerFilter() {
    return <Box>
        <Box marginBottom={1} padding={2} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box marginRight={1} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Box marginRight={1}>
                    <IconFilter size={24} />
                </Box>
                <Typography variant="h6" style={{ textTransform: 'uppercase' }}>{__tr("filter")}</Typography>
            </Box>
            <TextTransformNoneButton size="small" variant="text" color="primary">{__tr("clearAll")}</TextTransformNoneButton>
        </Box>
        <Divider />
        <Box paddingBottom={2}>
            <InfluencerFilterUi enableSorting />
        </Box>
    </Box>
}