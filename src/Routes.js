import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router/immutable";
import {history} from "./Redux/store";

const Routes = () => {
    return (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/"/>
        </Switch>
    </ConnectedRouter>
    );
};

export default Routes;