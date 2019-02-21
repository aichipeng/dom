import React from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from '../pages/home'
import List from '../pages/list';
const BasicRoute = () => (
    <HashRouter history={hashHistory}>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/list" component={List} />
        </Switch>
    </HashRouter>
);
export default BasicRoute;