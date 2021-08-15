import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core";
import { __tr } from "../i18n";

const Options = [
    "all",
    "cash",
    "barter",
    "wobbCoins"
]

export function TransactionTypeFilter() {
    return <Box>
        <Box padding={2}>
            <Typography variant="h6" style={{textTransform: 'uppercase'}}>{__tr("transactionType")}</Typography>
        </Box>
        <Divider />
        <Box padding={2}>
            <RadioGroup row>
                {
                    Options.map((op) => {
                        return <FormControlLabel key={op} control={<Radio size="small" color="primary" />} value={op} label={__tr(op)} />
                    })
                }
            </RadioGroup>
        </Box>
    </Box>
}