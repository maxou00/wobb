import { Box, Checkbox, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography, withStyles } from "@material-ui/core"
import { useCallback, useState } from "react";
import { useMemo } from "react"
import { MdAdd, MdRemove } from "react-icons/md";
import { __tr } from "../../i18n";

const items = {
    youtube: [
        "dedicatedVideo",
        "integratedVideo",
        "shorts"
    ],
    instagram: [
        "reels",
        "swipeUpStory",
        "igtv",
        "staticPost",
        "videoPost",
        "contentOnly"
    ]
}

const StyledButton = withStyles((t) => {
    return {
        root: {
            border: `1px solid ${t.palette.divider}`
        }
    }
})(IconButton);

interface DeliverableWithCount {
    deliverable: string;
    count: number;
}

interface PickerProps {
    platform: string;
}

export function DeliverablePicker(props: PickerProps) {
    const [deliverables, setDeliverables] = useState<DeliverableWithCount[]>([]);

    const validDeliverables = useMemo(() => {
        if (props.platform === "instagram") {
            return items.instagram;
        }
        else if (props.platform === "youtube") {
            return items.youtube;
        }
        return [];
    }, [props.platform]);

    const onDeliverableClicked = useCallback((deliverable: string) => {
        let exists = deliverables.find((d) => d.deliverable === deliverable);
        if(exists) {
            let cpy = deliverables.filter((d) => d.deliverable !== deliverable);
            setDeliverables(cpy);
        }
        else {
            let cpy = [...deliverables];
            cpy.push({
                deliverable,
                count: 1
            })
            setDeliverables(cpy);
        }
    },[deliverables]);

    const incOrDecDeliverable = useCallback((deliverable: string, count: number) => {
        let index = deliverables.findIndex((d) => d.deliverable === deliverable);
        if(index >= 0) {
            let cpy = [...deliverables];
            let newCount = cpy[index].count + count;
            if(newCount < 0) {
                newCount = 0;
            }
            cpy[index].count = newCount;
            setDeliverables(cpy);
        }
    }, [deliverables]);

    return <Box minWidth="320px">
        <List dense disablePadding>
            {
                validDeliverables.map((d) => {
                    let existent = deliverables.find((e) => e.deliverable === d);
                    return <ListItem button dense key={d} onClick={() => onDeliverableClicked(d)}>
                        <ListItemAvatar>
                            <Checkbox color="primary" size="small" checked={Boolean(existent)}  onChange={() => onDeliverableClicked(d)}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={__tr(d)} />
                        { existent && <ListItemSecondaryAction>
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                                <StyledButton size="small" onClick={() => incOrDecDeliverable(d, -1)}>
                                    <MdRemove size={14} />
                                </StyledButton>
                                <Box marginX={1}>
                                    <Typography variant="body2">{existent?.count || 0}</Typography>
                                </Box>
                                <StyledButton size="small" onClick={() => incOrDecDeliverable(d, 1)}>
                                    <MdAdd size={14} />
                                </StyledButton>
                            </Box>
                        </ListItemSecondaryAction> }
                    </ListItem>
                })
            }
        </List>
    </Box>
}