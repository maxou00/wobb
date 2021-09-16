import { Box, Checkbox, List, ListItem, ListItemAvatar, ListItemText, TextField } from "@material-ui/core";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { TextTransformNoneButton } from "../TextTransformNoneButton";
import { __tr } from "../../i18n";

const PromotionGoals = [
    "Product Review",
    "New Product Launch",
    "Brand anouncement"
]

interface Props {
    items: string[];
    onChange(values: string[]): any;
}

export function PromotionGoalsPicker(props: Props) {
    const [adding, setAdding] = useState(false);
    const [customs, setCustoms] = useState<string[]>(PromotionGoals);

    useEffect(() => {
        let raw = localStorage.getItem("custom_goals");
        if(raw) {
            setCustoms(JSON.parse(raw));
        }
    }, []);

    const onAppendCustom = useCallback((ev: ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();
        let goal = ev.currentTarget.goal.value;
        let next = [...customs];
        next.push(goal);
        setCustoms(next);
        ev.currentTarget.reset();
        localStorage.setItem("custom_goals", JSON.stringify(next));
        props.onChange([goal, ...props.items])
    }, [props, customs]);

    const onChecked = useCallback((goal: string, check: boolean) => {
        let next = [...props.items];
        if(check) {
            if(!next.includes(goal)) {
                next = [goal,...next] /// push it at the first place;
            }
        }
        else {
            next = next.filter((g) => g !== goal)
        }
        props.onChange(next);
    }, [props]);

    return <Box minWidth="320px">
        <List dense disablePadding>
            {
                customs.map((p) => {
                    let checked = props.items.includes(p);
                    return <ListItem dense key={p}>
                        <ListItemAvatar>
                            <Checkbox checked={checked} onChange={(ev) => onChecked(p, !checked)} color="primary" size="small" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={p} />
                    </ListItem>
                })
            }
        </List>
        {!adding && <Box paddingX={2} paddingY={1}>
            <TextTransformNoneButton
                variant="text"
                color="primary"
                size="small"
                startIcon={<MdAdd size={16} />}
                onClick={() => setAdding(true)}>
                {__tr("custom")}
            </TextTransformNoneButton>
        </Box>}
        {adding && <Box component="form" onSubmit={onAppendCustom} padding={1}>

            <TextField
                size="small"
                variant="outlined"
                fullWidth 
                name="goal"/>

            <Box paddingX={2} paddingY={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Box marginX={1}>
                    <TextTransformNoneButton
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit">
                        {__tr("save")}
                    </TextTransformNoneButton>
                </Box>
                <Box marginX={1}>
                    <TextTransformNoneButton
                        variant="outlined"
                        color="default"
                        size="small"
                        onClick={() => setAdding(false)}>
                        {__tr("cancel")}
                    </TextTransformNoneButton>
                </Box>
            </Box>
        </Box>}
    </Box>
}