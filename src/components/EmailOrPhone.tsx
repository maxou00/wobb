import { ChangeEvent, HTMLAttributes, useCallback, useEffect, useState } from "react"
import styles from "../styles/form.module.scss";
import { Box, IconButton, InputBase, Menu, MenuItem } from "@material-ui/core";
import countries from "../assets/countries.json";
import { ArrowDropDown } from "@material-ui/icons";
import { CountryMenuItem } from "./CountryMenuItem";

interface EmailOrPhoneValue {
    type: 'email' | 'phone',
    value: string;
}

interface Props {
    id?: string;
    label?: string;
    placeholder?: string;
    inputProps?: HTMLAttributes<HTMLInputElement>
    hint?: string;
    error?: string;
    onChange?(value: EmailOrPhoneValue): any;
}

export function EmailOrPhone(props: Props) {
    const [lookLikeMobile, setLookLikeMobile] = useState(false);
    const [inputContent, setInputContent] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<typeof countries[0]>();
    const [countryMenuAnchor, setCountryMenuAnchor] = useState<HTMLButtonElement>();

    const handleInputChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value;

        if (value.match(/^([0-9]{4,15})$/)) {
            if (!lookLikeMobile) {
                setLookLikeMobile(true);
            }
        }
        else {
            if (lookLikeMobile) {
                setLookLikeMobile(false);
            }
        }
        setInputContent(value);
    }, [lookLikeMobile]);

    const onCountrySelected = useCallback((country: typeof selectedCountry) => {
        setSelectedCountry(country);
        setCountryMenuAnchor(undefined);
    }, []);

    useEffect(() => {
        if(props.onChange) {
            if(lookLikeMobile && inputContent && selectedCountry) {
                props.onChange({
                    type:  'phone',
                    value: `${selectedCountry.dialCode} ${inputContent}`
                })
            }
            else if(inputContent && !lookLikeMobile) {
                props.onChange({
                    type:  'email',
                    value: inputContent
                })
            }
        }
    }, [lookLikeMobile, selectedCountry, inputContent, props]);

    return <div className={styles.singleLineInput}>
        {props.label && <label htmlFor={props.id || ""} className={styles.label}>{props.label}</label>}
        <div className={styles.inputRow}>
            <InputBase
                type={"text"}
                className={styles.input}
                id={props.id || ""}
                placeholder={props.placeholder}
                value={inputContent}
                onChange={handleInputChange} />
            {
                lookLikeMobile && <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
                    {
                        selectedCountry && <CountryMenuItem country={selectedCountry} />
                    }
                    <IconButton size="small" onClick={(ev) => setCountryMenuAnchor(ev.currentTarget)}>
                        <ArrowDropDown fontSize="small" />
                    </IconButton>
                    <Menu anchorEl={countryMenuAnchor} open={Boolean(countryMenuAnchor)} onClose={() => setCountryMenuAnchor(undefined)}>
                        {
                            countries.map((c) => {
                                return <MenuItem key={c.isoCode} onClick={() => onCountrySelected(c)}>
                                    <CountryMenuItem country={c} />
                                </MenuItem>
                            })
                        }
                    </Menu>
                </Box>
            }
        </div>
        <div className={styles.hintAndErrors}>
            {props.hint &&
                <span className={styles.hint}>
                    {props.hint}
                </span>
            }
            {props.error &&
                <span className={styles.error}>
                    {props.error}
                </span>
            }
        </div>
    </div>
}