import { useEffect } from "react";
import { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { initializeState } from "../state/middlewares";

/**
 * Runs initialization process of the entier app by loading user and other properties required to run the app.
 * @param props
 * @returns 
 */
export function Initializer(props: PropsWithChildren<{}>) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeState());
    }, [dispatch]);

    return <>{props.children}</>;
}