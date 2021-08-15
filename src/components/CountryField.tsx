import { MenuItem, TextField, TextFieldProps } from "@material-ui/core";
import countries from "../assets/countries.json";

export function CountryField(props: TextFieldProps) {
    return <TextField {...props} select>
        {
            countries.map((c) => {
                return <MenuItem dense key={c.name} value={c.isoCode}>{c.name}</MenuItem>
            })
        }
    </TextField>
}