import { css } from "@emotion/css"
import { useMemo } from "react";
import { CssVariables } from "../css-variables"

const styles = {
    progress: css`
        background:${CssVariables.colorGrayV1};
        height: 4px;
        width: 100%;
        border-radius: 8px;
    `,
    percent: css`
        background: ${CssVariables.colorPrimary};
        height: 100%;
        width: 0%;
        border-radius: 8px;
    `
}
export function UnmodifiableProgress(props: { progress: number; height?: number; }) {
    const internalProgress = useMemo(() => {
        if (props.progress < 0) {
            return 0;
        }
        else if (props.progress > 100) {
            return 100;
        }
        return props.progress;
    }, [props]);

    const internalHeight = useMemo(() => {
        if (props.height) {
            return props.height;
        }
        return 4;
    }, [props]);

    return <div className={styles.progress} style={{
        height: `${internalHeight}px`,
        borderRadius: `${internalHeight}px`,
    }}>
        <div className={styles.percent} style={{
            width: `${internalProgress}%`,
            height: `${internalHeight}px`,
            borderRadius: `${internalHeight}px`,
        }}/>
    </div>
}