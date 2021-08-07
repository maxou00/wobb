import { CssVariables } from "../css-variables"
import countries from "../assets/countries.json";
import { CSSProperties } from "react";

const CountryItemStyles: { [key: string]: CSSProperties } = {
     flag: {
        fontSize: CssVariables.fontSizeBodyText,
        width: '24px',
        height: 'auto',
        objectFit: 'contain'
    },
    dialCode: {
        marginLeft: '4px',
        fontSize: CssVariables.fontSizeBodyText
    },
    countryNode: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}

export function CountryMenuItem(props: { country: typeof countries[0] }) {
    return <div style={CountryItemStyles.countryNode}>
        <img
            src={props.country.flag}
            alt={props.country.dialCode}
            style={CountryItemStyles.flag} />
        <span style={CountryItemStyles.dialCode}>{props.country.dialCode}</span>
    </div>
}