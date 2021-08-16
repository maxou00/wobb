import { Grid, Paper } from "@material-ui/core";
import { TaskContent } from "./TaskContent";
import { TaskDeliverables } from "./TaskDeliverables";
import { TaskSubmit } from "./TaskSubmit";


export function TaskView() {
    return <Grid container spacing={2}>
        <Grid item xs={3}>
            <Paper elevation={0}>
                <TaskDeliverables />
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper elevation={0}>
                <TaskContent />
            </Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper elevation={0}>
                <TaskSubmit />
            </Paper>
        </Grid>
    </Grid>
}