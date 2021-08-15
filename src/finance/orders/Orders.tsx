import { Box, Grid, Paper } from "@material-ui/core";
import { AppMetadata } from "../../components/AppMetadata";
import { EscrowAccountBalanceCard } from "./EscrowAccountBalanceCard";
import { OrderTransactions } from "./OrderTansactions";
import { OrderTransactionReceipt } from "./OrderTransactionReceipt";
import { OrderTransactionTypeFilter } from "./OrderTransactionTypeFilter";

export function Orders() {
    return <Grid container spacing={2} >
        <Grid item xs={8}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Box padding={2}>
                                <EscrowAccountBalanceCard />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <OrderTransactions />
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
                            <OrderTransactionTypeFilter />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <OrderTransactionReceipt />
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