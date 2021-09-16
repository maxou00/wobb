import { Box, Checkbox, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography, withStyles } from "@material-ui/core"
import { useCallback, useState } from "react";
import { useMemo } from "react"
import { MdAdd, MdRemove } from "react-icons/md";
import { DeliverableWithCount } from "../../core";
import { __tr } from "../../i18n";
import { Deliverable } from "../../models";
import { Platform } from "../../models";

const items = {
    youtube: [
        Deliverable.DEDICATED_VIDEO,
        Deliverable.INTEGRATED_VIDEO,
        Deliverable.SHORT
    ],
    instagram: [
        Deliverable.REEL,
        Deliverable.CONTENT_ONLY,
        Deliverable.STATIC_POST,
        Deliverable.SWIPE_UP_STORY,
        Deliverable.VIDEO_POST,
        Deliverable.IGTV
    ]
}

const StyledButton = withStyles((t) => {
    return {
        root: {
            border: `1px solid ${t.palette.divider}`
        }
    }
})(IconButton);


interface PickerProps {
    platform: Platform;
    deliverables: DeliverableWithCount[];
    onChange(values: DeliverableWithCount[]): any;
}

export function DeliverablePicker(props: PickerProps) {
    const validDeliverables = useMemo(() => {
        if (props.platform === Platform.INSTAGRAM) {
            return items.instagram;
        }
        else if (props.platform === Platform.YOUTUBE) {
            return items.youtube;
        }
        return [];
    }, [props.platform]);

    const onDeliverableClicked = useCallback((deliverable: Deliverable) => {
        let exists = props.deliverables.find((d) => d.deliverable === deliverable);
        if(exists) {
            let cpy = props.deliverables.filter((d) => d.deliverable !== deliverable);
            props.onChange(cpy);
        }
        else {
            let cpy = [...props.deliverables];
            cpy.push({
                deliverable,
                count: 1
            })
            props.onChange(cpy);
        }
    },[props]);

    const incOrDecDeliverable = useCallback((deliverable: string, count: number) => {
        let index = props.deliverables.findIndex((d) => d.deliverable === deliverable);
        if(index >= 0) {
            let cpy = [...props.deliverables];
            let newCount = cpy[index].count + count;
            if(newCount < 0) {
                newCount = 0;
            }
            cpy[index].count = newCount;
            props.onChange(cpy);
        }
    }, [props]);

    return <Box minWidth="320px">
        <List dense disablePadding>
            {
                validDeliverables.map((d) => {
                    let existent = props.deliverables.find((e) => e.deliverable === d);
                    return <ListItem button dense key={d} onClick={() => onDeliverableClicked(d)}>
                        <ListItemAvatar>
                            <Checkbox color="primary" size="small" checked={Boolean(existent)}  onChange={() => onDeliverableClicked(d)}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={__tr(d.toLowerCase())} />
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