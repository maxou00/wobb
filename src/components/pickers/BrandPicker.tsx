import { Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Radio, RadioGroup, TextField } from "@material-ui/core";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { MdAdd, MdEdit } from "react-icons/md";
import { TextTransformNoneButton } from "../TextTransformNoneButton";
import { __tr } from "../../i18n";
import { Brand } from "../../models";
import { useAppUser, useBrands } from "../../state/selectors";
import { useDispatch } from "react-redux";
import { DataStore } from "@aws-amplify/datastore";
import { appendBrand } from "../../state/action-creators";

interface Props {
    brand?: Brand;
    onChange(value: Brand): any;
}

export function BrandPicker(props: Props) {
    const [name, setBrandName] = useState("");
    const [website, setBrandWebsite] = useState("");
    const [busy, setBusy] = useState(false);

    const { user } = useAppUser();
    const brands = useBrands();
    const dispatch = useDispatch();

    const [adding, setAdding] = useState(false);
    const [editing, setEditing] = useState(false);
    const [updateCandidate, setUpdateCandidate] = useState<Brand>();

    const brandsWithoutUpdate = useMemo(() => {
        if (!editing && !updateCandidate) {
            return brands;
        }
        return brands.filter((b) => b.id !== updateCandidate?.id);
    }, [editing, updateCandidate, brands]);

    const cancelAddOrUpdate = useCallback(() => {
        setAdding(false);
        setUpdateCandidate(undefined);
        setEditing(false);
    }, []);

    const selectForUpdate = useCallback((brand: Brand) => {
        setUpdateCandidate(brand);
        setBrandWebsite(brand.website || "");
        setBrandName(brand.name || "");
        setEditing(true);
    }, []);

    const onAppendBrand = useCallback(async () => {
        setBusy(true);
        let saved = await DataStore.save(
            new Brand({
                name,
                website,
                uid: user.sub
            })
        );
        dispatch(appendBrand(saved));
        setBrandName("");
        setBrandWebsite("");
        setBusy(false);
        props.onChange(saved);
    }, [dispatch, name, website, user, props]);

    const onUpdateBrand = useCallback(async () => {
        if (updateCandidate) {
            setBusy(true);
            let saved = await DataStore.save(
                Brand.copyOf(updateCandidate, (b) => {
                    b.name = name;
                    b.website = website;
                })
            );
            dispatch(appendBrand(saved));
            setBrandName("");
            setBrandWebsite("");
            setUpdateCandidate(undefined);
            setEditing(false);
            setBusy(false);
        }
    }, [dispatch, name, updateCandidate, website]);


    const onRadioChange = useCallback((brand: Brand, checked: boolean) => {
        if (checked) {
            props.onChange(brand);
        }
    }, [props]);

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
        {(adding || editing) && <Box padding={1}>
            <Box marginY={.75}>
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder={__tr("enterBrandName")}
                    value={name}
                    onChange={(ev) => setBrandName(ev.currentTarget.value)}
                    fullWidth />
            </Box>
            <Box marginY={.75}>
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder={__tr("enterBrandWebsite")}
                    value={website}
                    onChange={(ev) => setBrandWebsite(ev.currentTarget.value)}
                    fullWidth />
            </Box>
            <Box paddingY={.5} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Box marginX={1}>
                    <TextTransformNoneButton
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={updateCandidate ? onUpdateBrand : onAppendBrand}>
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
                            <Radio color="primary" size="small" value={b.id} checked={props.brand?.id === b.id} onChange={(ev, check) => onRadioChange(b, check)} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={b.name} />
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