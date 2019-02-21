import React from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from '../pages/home'
import List from '../pages/list';
import User from '../pages/user';
const BasicRoute = () => (
    <HashRouter history={hashHistory}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={List} />
            <Route exact path="/user" component={User} />
        </Switch>
    </HashRouter>
);
export default BasicRoute;