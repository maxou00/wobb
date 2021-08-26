import { useEffect } from "react";
import { PropsWithChildren } from "react";
import {} from "amazon-cognito-identity-js";
import { useHistory } from "react-router";
import { useAppUser } from "../state/selectors";

export function RouteProtector(props: PropsWithChildren<{}>) {
    const {user} = useAppUser();
    const history = useHistory();

    useEffect(() => {
        if(!user) {
            let href = encodeURIComponent(window.location.href);
            history.replace(`/auth/login?next=${href}`);
        }
    }, [user, history]);

    return <>
        {
            props.children
        }
    </>
}