import express from "express";
import routes from "../routes";

import {
    getCalendar,
    createTodo,
    deleteTodo
} from "../Controller/calendarController"


const plannerRoutes = express.Router();

var planner = routes.planner;

plannerRoutes.post(planner+routes.getCalendar, getCalendar);
plannerRoutes.post(planner+routes.addTodo, createTodo);
plannerRoutes.post(planner+routes.deleteTodo, deleteTodo);

export default plannerRoutes;