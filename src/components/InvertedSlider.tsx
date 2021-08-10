import { css } from "@emotion/css";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react"
import { CssVariables } from "../css-variables";

interface InvertedSliderProps {
    min: number;
    max: number;
    value: number;
    minTitle: string;
    maxTitle: string;
    onChange(value: number): any;
}

const styles = {
    sliderContainer: css`
        width: 100%;
        height: 46px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    `,
    slider: css`
        background: ${CssVariables.colorGrayV1};
        height: 8px;
        width: 100%;
        border-radius: 8px;
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    `,
    overlay: css`
        background: ${CssVariables.colorPrimary};
        border-radius: 16px;
        height: 100%;
        width: 100%;
    `,
    control: css`
        background: ${CssVariables.colorPrimary};
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 24px;
        top: 50%;
        transform: translateY(-50%);
        padding: 6px;
        cursor: pointer;
        &[data-moving = true] {
            box-shadow: 1px 1px 8px ${CssVariables.colorPrimary}
        }
    `,
    inner: css`
        background: white;
        width: 100%;
        height:100%;
        border-radius: 24px;
    `,
    counter: css`
        width:100%;   
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        pointer-events: none;
    `,
    boundary: css`
        font-size: ${CssVariables.fontSizeAnySmall};
        color: ${CssVariables.colorGrayV2}
    `
}

export function InvertedSlider(props: InvertedSliderProps) {
    const [hasCandidate, setHasCandidate] = useState(false);
    const [requestTime, setRequestTime] = useState(-1);
    const [isSliding, setIsSliding] = useState(false);
    const sliderRef = useRef<HTMLDivElement | null>();

    const percent = useMemo(() => {
        let amp = props.max - props.min;
        let valueAmp = props.value - props.min;

        let percent = 100 * valueAmp / amp;
        return percent;
    }, [props]);

    const isCandidateViable = useMemo(() => {
        if (requestTime === -1) {
            return false;
        }

        let date = new Date(requestTime);
        let now = Date.now();
        date.setSeconds(date.getSeconds() + 2);
        return (hasCandidate && date.getMilliseconds() < now);

    }, [hasCandidate, requestTime])

    const move = useCallback((ev: globalThis.MouseEvent) => {
        if (sliderRef.current) {
            let mouseX = ev.clientX;
            let width = sliderRef.current.clientWidth;
            let offsetLeft = sliderRef.current.offsetLeft;
            let offset = mouseX - offsetLeft;
            let next = Math.ceil(offset * 100 / width);
            if (next < 0) {
                next = 0;
            }
            else if (next > 100) {
                next = 100;
            }

            let amp = props.max - props.min;
            let value = (next * amp/100) + props.min;
            props.onChange(value);
        }
    }, [sliderRef, props]);

    const onMouseDownOnControl = useCallback((ev: globalThis.MouseEvent) => {
        console.log("mousedown");
        if (isCandidateViable && !isSliding) {
            setIsSliding(true);
            setHasCandidate(false);
            setRequestTime(-1);

            move(ev);
        }
        else {
            setHasCandidate(true);
            setRequestTime(Date.now());
        }
    }, [isCandidateViable, isSliding, move]);

    useEffect(() => {
        const cleanup = () => {
            console.log("slide end");
            if (isSliding) {
                setIsSliding(false);
            }
        }

        if (isSliding) {
            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", cleanup);
        }

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", cleanup);
        }
    }, [isSliding, move]);

    return <div
        className={styles.sliderContainer}>
        <div
            ref={(el) => sliderRef.current = el}
            onClick={(ev) => move(ev as unknown as globalThis.MouseEvent)}
            className={styles.slider}>
            <span
                className={styles.overlay}
                style={{ width: `${100 - percent}%` }}></span>
            <div
                onMouseDown={(ev) => onMouseDownOnControl(ev as any)}
                className={styles.control}
                data-moving={isSliding}
                style={{ left: `${percent}%`, transform: 'translate(-50%, -50%)' }}>
                <div
                    className={styles.inner}
                    onMouseDown={(ev) => onMouseDownOnControl(ev as any)}></div>
            </div>
        </div>
        { props.maxTitle && props.minTitle && <div className={styles.counter}>
            <span className={styles.boundary}>{props.minTitle}</span>
            <span className={styles.boundary}>{props.maxTitle}</span>
        </div> }
    </div>
}