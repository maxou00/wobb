import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { PropsWithChildren } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../state";
import { initializeState } from "../state/middlewares";
import { Loader } from "./Loader";

const mapState = (state: IAppState) => {
    return {};
}

const mapDispatch = (dispatch: ThunkDispatch<IAppState, {}, AnyAction>) => {
    return {
        initialize: () => dispatch(initializeState())
    }
}

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
/**
 * Runs initialization process of the entier app by loading user and other properties required to run the app.
 * @param props
 * @returns 
 */
function Initializer(props: PropsWithChildren<Props>) {
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        setBusy(true);
        props.initialize().then((_) => {
            setBusy(false);
        })
    }, []);

    return <>
        {busy && <Box width='100vw' height="100vh" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <Loader />
        </Box>}
        {
            !busy && props.children
        }
    </>;
}

export default connect(mapState, mapDispatch)(Initializer);