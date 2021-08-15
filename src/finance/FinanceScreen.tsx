import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../routes";
import { EarningScreen } from "./EarningScreen";
import { OrderScreen } from "./OrderScreen";

export function FinanceScreen() {
    return <Switch>
        <Route path={Routes.MyEarnings}>
            <EarningScreen/>
        </Route>
        <Route path={Routes.MyOrders}>
            <OrderScreen/>
        </Route>
        <Route path={Routes.Finance} exact>
            <Redirect to={Routes.MyEarnings}/>
        </Route>
    </Switch>
}