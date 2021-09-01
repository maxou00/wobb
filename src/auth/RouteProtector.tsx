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
            let href = new URL(window.location.href);
            let nextPath = encodeURIComponent(`${href.pathname}${href.search}`)
            history.replace(`/auth/login?next=${nextPath}`);
        }
    }, [user, history]);

    return <>
        {
            user && props.children
        }
    </>
}