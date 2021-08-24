import { useEffect } from "react";
import { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { UserPool } from "../core/constants";
import { setCurrentUser } from "../state/action-creators";
import { cognitoUserDataToObject } from "../state/utils";

/**
 * Runs initialization process of the entier app by loading user and other properties required to run the app.
 * @param props
 * @returns 
 */
export function Initializer(props: PropsWithChildren<{}>) {
    const user = UserPool.getCurrentUser();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            user.getUserData((err, data) => {
                if (data) {
                    dispatch(setCurrentUser(cognitoUserDataToObject(data)));
                }
            })
        }
    }, [dispatch, user]);

    return <>{props.children}</>;
}