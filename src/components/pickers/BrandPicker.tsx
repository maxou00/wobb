import { Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Radio, TextField } from "@material-ui/core";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { MdAdd, MdEdit } from "react-icons/md";
import { TextTransformNoneButton } from "../TextTransformNoneButton";
import { __tr } from "../../i18n";

interface Brand { 
    name: string;
    url: string;
}

const Brands: Brand[] = [
    {
        name: 'Plum',
        url: 'www.plum.com'
    },
    {
        name: 'Soultree',
        url: 'www.soultr.ee'
    },
    {
        name: 'Elle',
        url: 'www.el.le'
    }
]

export function BrandPicker() {
    const [adding, setAdding] = useState(false);
    const [editing, setEditing] = useState(false);
    const [updateCandidate, setUpdateCandidate] = useState<Brand>();

    const brandsWithoutUpdate = useMemo(() => {
        if(!editing && !updateCandidate){
            return Brands;
        }
        return Brands.filter((b) => b.name !== updateCandidate?.name && b.url !== updateCandidate?.url);
    },[editing, updateCandidate]);

    const cancelAddOrUpdate = useCallback(() => {
        setAdding(false);
        setUpdateCandidate(undefined);
        setEditing(false);
    }, []);

    const selectForUpdate = useCallback((brand: Brand) => {
        setUpdateCandidate(brand);
        setEditing(true);
    }, []);

    const onAppendBrand = useCallback(() => {

    }, []);

    const onUpdateBrand = useCallback(() => {

    }, []);

    return <Box minWidth="320px">
        {!adding && <>
            <Box paddingX={2} paddingY={.5}>
                <TextTransformNoneButton
                    variant="text"
                    color="primary"
                    size="small"
                    startIcon={<MdAdd size={16} />}
                    onClick={() => setAdding(true)}>
                    {__tr("btnAddNewBrand")}
                </TextTransformNoneButton>
            </Box>
            <Divider />
        </>
        }
        { (adding || editing) && <Box padding={1}>
            <Box marginY={.75}>
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder={__tr("enterBrandName")}
                    value={updateCandidate?.name}
                    fullWidth />
            </Box>
            <Box marginY={.75}>
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder={__tr("enterBrandWebsite")}
                    value={updateCandidate?.url}
                    fullWidth />
            </Box>
            <Box paddingY={.5} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Box marginX={1}>
                    <TextTransformNoneButton
                        variant="contained"
                        color="primary"
                        size="small">
                        {__tr("save")}
                    </TextTransformNoneButton>
                </Box>
                <Box marginX={1}>
                    <TextTransformNoneButton
                        variant="outlined"
                        color="default"
                        size="small"
                        onClick={cancelAddOrUpdate}>
                        {__tr("cancel")}
                    </TextTransformNoneButton>
                </Box>
            </Box>
        </Box>
        }
        <List dense disablePadding>
            {
                brandsWithoutUpdate.map((b) => {
                    return <ListItem dense button key={b.name}>
                        <ListItemAvatar>
                            <Radio color="primary" size="small" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={b.name}/>
                        <ListItemSecondaryAction>
                            <IconButton size="small" onClick={() => selectForUpdate(b)}>
                                <MdEdit size={16} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                })
            }
        </List>
    </Box>
}