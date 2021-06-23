import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Group from "../Routes/Group";
import Home from "../Routes/Home";
import Planner from "../Routes/Planner";
import Stat from "../Routes/Stat";
import Rank from "../Routes/Rank";
import Register from "../Routes/Register"
import Login from "../Routes/Login"

export default () => (
    <Router>
        <Navigation />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/group" exact component={Group}/>
            <Route path="/planner" component={Planner}/>
            <Route path="/stat" component={Stat}/>
            <Route path="/rank" component={Rank}/>
            <Redirect from="*" to="/" />
        </Switch>

    </Router>
)