import express from "express";
import routes from "../routes";

import {
    getCalendar
} from "../Controller/calendarController"


const plannerRoutes = express.Router();

var planner = routes.planner;

plannerRoutes.post(planner+routes.getCalendar, getCalendar);


export default plannerRoutes;