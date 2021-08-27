import React, {Suspense} from "react";
import styled,{css} from 'styled-components';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import ActiveTimer from "../Routes/ActiveTimer"
import Auth from "../hoc/auth";
import Navigation from "./Navigation";
import Home from "../Routes/Home";
import Group from "../Routes/Group";
import GStudy from "../Routes/GStudy";
import Login from "../Routes/Login";
import Planner from "../Routes/Planner";
import Stat from "../Routes/Stat";
import Rank from "../Routes/Rank";
import Register from "../Routes/Register";
import GDetail from "../Routes/GDetail/GDetailContainer";

const Container = styled.div`
    width: 100%;
`;

const AppRouter = () => (
    <Suspense fallback={(<div>Loading...</div>)}>
        <Router>
            <Navigation />
            <Container>
                <Switch>
                    <Route path="/" exact component={Auth(Home, true)}/>
                    <Route path="/active" exact component={Auth(ActiveTimer, true)}/>
                    <Route path="/login" component={Auth(Login, false)}/>
                    <Route path="/register" component={Auth(Register, false)}/>
                    <Route path="/group" exact component={Auth(Group, true)}/>
                    <Route path="/group/study" component={Auth(GStudy, true)}/>
                    <Route path="/group/detail" component={Auth(GDetail, true)}/>
                    <Route path="/planner" component={Auth(Planner, true)}/>
                    <Route path="/stat" component={Auth(Stat, true)}/>
                    <Route path="/rank" component={Auth(Rank, true)}/>
                    <Redirect from="*" to="/" />
                </Switch>
            </Container>
        </Router>
    </Suspense>
)

export default AppRouter