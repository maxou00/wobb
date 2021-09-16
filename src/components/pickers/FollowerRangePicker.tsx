import { Box, Checkbox, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import { TextTransformNoneButton } from "../TextTransformNoneButton";
import { __tr } from "../../i18n";
import { FollowerRange } from "../../core";
import { useCallback } from "react";

interface Props {
    onUseCustom(): any;
    ranges: FollowerRange[];
    onChange(values: FollowerRange[]): any;
}

const ranges: FollowerRange[] = [
    {
        label: "Nano (1K-10K)",
        lower: 1000,
        upper: 10000
    },
    {
        label: "Micro (10K-50K)",
        lower: 10000,
        upper: 50000
    },
    {
        label: "Macro (50K-250K)",
        lower: 50000,
        upper: 250000
    },
    {
        label: "Mega (250K+)",
        lower: 250000
    }
]

export function FollowerRangePicker(props: Props) {

    const onRangeChecked = useCallback((r:FollowerRange, check: boolean) => {
        let next = [...props.ranges];
        if(check) {
            if(!next.includes(r)) {
                next.push(r);
            }
        }
        else {
            next = next.filter((c) => c.lower !== r.lower && c.upper !== r.upper)
        }
        props.onChange(next);
    }, [props]);

    return <Box>
        <List>
            {
                ranges.map((range, i) => {
                    let checked = Boolean(props.ranges.find((r) => r.lower === range.lower && r.upper === range.upper));

                    return <ListItem dense key={`${range.label|| ""}-${i}`}>
                        <ListItemAvatar>
                            <Checkbox color="primary" size="small" checked={checked} onChange={() => onRangeChecked(range, !checked)}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={range.label || ""} />
                    </ListItem>
                })
            }
        </List>
        <Box paddingX={2} paddingY={1}>
            <TextTransformNoneButton
                variant="text"
                color="primary"
                size="small"
                startIcon={<MdAdd size={16} />}
                onClick={props.onUseCustom}>
                {__tr("custom")}
            </TextTransformNoneButton>
        </Box>
    </Box>
}