import { InputBase } from "@material-ui/core";
import { InputHTMLAttributes } from "react";
import styles from "../styles/form.module.scss";

export interface InputProps {
    id?: string;
    name?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>
    hint?: string;
    error?: string;
}

export function SingleLineInput(props: InputProps) {
    return <div className={styles.singleLineInput}>
        {
            props.label && <label htmlFor={props.id || ""} className={styles.label}>{props.label}</label>
        }
        <div className={styles.inputRow}>
            <InputBase
                type={props.type}
                name={props.name}
                className={styles.input}
                id={props.id || ""} 
                placeholder={props.placeholder} 
                inputProps={props.inputProps} />
        </div>
        <div className={styles.hintAndErrors}>
            {props.hint && <span className={styles.hint}>
                {props.hint}
            </span>}
            {props.error && <span className={styles.error}>
                {props.error}
            </span>}
        </div>
    </div>
}