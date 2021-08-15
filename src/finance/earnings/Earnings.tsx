import { Box, Grid, Paper } from "@material-ui/core";
import { AppMetadata } from "../../components/AppMetadata";
import { BalanceCard } from "./BalanceCard";
import { TransactionReceipt } from "./TransactionReceipt";
import { Transactions } from "./Transactions";
import { TransactionTypeFilter } from "./TransactionTypeFilter";

export function Earnings() {
    return <Grid container spacing={2} >
        <Grid item xs={8}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Box padding={2}>
                                <BalanceCard />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Transactions />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        <Grid item xs={4}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <TransactionTypeFilter />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <TransactionReceipt />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <AppMetadata />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
}