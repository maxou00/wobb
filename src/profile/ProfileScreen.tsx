import { Box, Grid, Paper } from "@material-ui/core";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { __tr } from "../i18n";
import { AboutUser } from "./AboutUser";
import { UserResumeCard } from "./UserResumeCard";

export function ProfileScreen() {
    return <Box paddingY={2}>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Paper elevation={0}>
                    <Box paddingY={2} width="100%">
                        <UserResumeCard />
                    </Box>
                    <Box paddingX={2} paddingY={1} width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Box marginRight={1}>
                            <TextTransformNoneButton variant="outlined" color="primary">{__tr("editProfile")}</TextTransformNoneButton>
                        </Box>
                        <Box marginRight={1}>
                            <TextTransformNoneButton variant="outlined" color="primary">{__tr("addAccount")}</TextTransformNoneButton>
                        </Box>
                    </Box>
                    <Box paddingX={2} paddingY={2} width="100%">
                        <AboutUser />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={0}>

                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper elevation={0}>

                </Paper>
            </Grid>
        </Grid>
    </Box>
}