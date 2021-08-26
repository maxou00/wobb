import React, { useState, useRef, useEffect, MutableRefObject } from "react";

interface WrappedProps {
    open: boolean,
    setOpen(open: boolean): any,
    ref: MutableRefObject<HTMLElement | undefined>;
}

type Component = React.ComponentType<WrappedProps>;

export default function Influencer(WrappedComponent: Component): Component {
    const Component = (props: any) => {
        const [open, setOpen] = useState(false);

        const ref = useRef<HTMLElement>();

        useEffect(() => {
            const handleClickOutside = (event: globalThis.MouseEvent) => {
                if (!ref.current?.contains(event.target as HTMLElement) || false) {
                    setOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
        }, [ref]);

        return <WrappedComponent
            open={open}
            setOpen={setOpen}
            ref={ref}/>;
    };

    return Component;
}
