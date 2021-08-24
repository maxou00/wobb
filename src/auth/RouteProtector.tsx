import { useEffect } from "react";
import { PropsWithChildren } from "react";
import {} from "amazon-cognito-identity-js";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useAppUser } from "../refer-earn/selectors";

export function RouteProtector(props: PropsWithChildren<{}>) {
    const userState = useAppUser();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!userState.user) {
            let href = encodeURIComponent(window.location.href);
            history.replace(`/auth/login?next=${href}`);
        }
    }, [userState, history, dispatch]);

    return <>
        {
            props.children
        }
    </>
}