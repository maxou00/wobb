import { KeyboardEvent, useCallback, useEffect, useMemo, useState } from "react"
import { OTPEntry, randomOTPArray } from "../core/roles"
import styles from "../styles/form.module.scss";

interface Props {
    length: number;
    onChange?(val: string): any;
}

export function OTPInput(props: Props) {
    const [cases, setCases] = useState(randomOTPArray(props.length))
    const [activeCaseID, setActiveCaseID] = useState(cases[0].key);

    const activeIndex = useMemo(() => {
        return cases.findIndex((c) => c.key === activeCaseID);
    }, [cases, activeCaseID]);

    const nextCase = useCallback(() => {
        if (activeIndex >= 0 && activeIndex < cases.length - 1) {
            let next = activeIndex + 1;
            setActiveCaseID(cases[next].key);
        }
    }, [activeIndex, cases])

    const lastCase = useCallback(() => {
        if (activeIndex > 0 && activeIndex <= cases.length - 1) {
            let next = activeIndex - 1;
            setActiveCaseID(cases[next].key);
        }
    }, [activeIndex, cases]);

    useEffect(() => {
        let activeNode = document.getElementById(activeCaseID) as HTMLInputElement;
        if(activeNode) {
            activeNode.focus();
        }
    }, [activeCaseID]);

    const onCaseEntered = useCallback((ev: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, entry: OTPEntry) => {
        let key = ev.key.toLowerCase();
        setActiveCaseID(entry.key);

        let currentIndex = cases.findIndex((c) => c.key === entry.key)

        if (key.match(/^([0-9]{1}$)/)) {
            let copy = [...cases];
            copy[currentIndex].value = key;
            setCases(copy);
            nextCase();
        }

        else if (key === "enter") {
            /// edition complete;
            nextCase();
        }
        else if (key === "backspace") {
            let copy = [...cases];
            copy[currentIndex].value = '';
            setCases(copy);
            lastCase();
        }

        if(cases.every((c) => Boolean(c.value))) {
            if(props.onChange) {
                props.onChange(cases.map(c => c.value).join(""));
            }
        }

    }, [cases, lastCase, nextCase, props]);

    return <div className={styles.otp}>

        {
            cases.map((c) => {
                return <input
                    key={c.key}
                    name={c.key}
                    placeholder={'0'}
                    value={c.value}
                    className={styles.otpCase}
                    id={c.key}
                    onClick={(ev) => setActiveCaseID(c.key)}
                    onKeyDown={(ev) => onCaseEntered(ev, c)} />
            })
        }
    </div>
}