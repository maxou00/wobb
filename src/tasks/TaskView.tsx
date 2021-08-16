import { Grid, Paper } from "@material-ui/core";
import { TaskContent } from "./TaskContent";
import { TaskMenu } from "./TaskMenu";
import { TaskSubmit } from "./TaskSubmit";


export function TaskView() {
    return <Grid container spacing={2}>
        <Grid item xs={2}>
            <Paper elevation={0}>
                <TaskMenu />
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper elevation={0}>
                <TaskContent />
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper elevation={0}>
                <TaskSubmit />
            </Paper>
        </Grid>
    </Grid>
}