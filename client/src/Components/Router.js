import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Group from "../Routes/Group";
import Home from "../Routes/Home";
import Planner from "../Routes/Planner";
import Stat from "../Routes/Stat";
import Rank from "../Routes/Rank";
import Register from "../Routes/Register";
import Login from "../Routes/Login";
import ActiveTimer from "../Routes/ActiveTimer"
import Auth from "../hoc/auth";

export default () => (
    <Suspense fallback={(<div>Loading...</div>)}>
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Auth(Home, true)}/>
                <Route path="/active/:id" exact component={Auth(ActiveTimer, true)}/>
                <Route path="/login" component={Auth(Login, false)}/>
                <Route path="/register" component={Auth(Register, false)}/>
                <Route path="/group" component={Auth(Group, true)}/>
                <Route path="/planner" component={Auth(Planner, true)}/>
                <Route path="/stat" component={Auth(Stat, true)}/>
                <Route path="/rank" component={Auth(Rank, true)}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    </Suspense>
)