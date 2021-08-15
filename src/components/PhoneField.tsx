import { Menu, MenuItem, TextField, TextFieldProps } from "@material-ui/core";
import { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { MdArrowDropDown } from "react-icons/md";
import countries from "../assets/countries.json";
import { CountryMenuItem } from "./CountryMenuItem";
import { TextTransformNoneButton } from "./TextTransformNoneButton";

export function PhoneField(props: TextFieldProps & { onPrefixChange?(prefix: string): any}) {
    const [prefix, setPrefix] = useState<typeof countries[0]>(countries[0]);
    const [btnRef, setBtnRef] = useState<HTMLButtonElement>();

    const onCountrySelected = useCallback((c: typeof prefix) => {
        setPrefix(c);
        setBtnRef(undefined);
        if(props.onPrefixChange) {
            props.onPrefixChange(c.dialCode);
        }
    },[props]);

    const startBtn = useMemo(() => {
        return <TextTransformNoneButton
            color="default"
            size="small"
            variant="text"
            disableRipple
            onClick={(ev) => setBtnRef(ev.currentTarget)}
            startIcon={<img src={prefix.flag} alt={prefix.dialCode} width="24" height="24" />}
            endIcon={<MdArrowDropDown size={18} />}>
            {prefix.dialCode}
        </TextTransformNoneButton>
    }, [prefix]);

    return <>
        <TextField
            InputProps={{
                startAdornment: startBtn
            }}
            inputProps={{
                style: {
                    paddingLeft: 8
                }
            }}
            {...props} />
        <Menu anchorEl={btnRef} open={Boolean(btnRef)} onClose={() => setBtnRef(undefined)}>
            {
                countries.map((c) => {
                    return <MenuItem key={c.isoCode} onClick={() => onCountrySelected(c)}>
                        <CountryMenuItem country={c} />
                    </MenuItem>
                })
            }
        </Menu>
    </>
}