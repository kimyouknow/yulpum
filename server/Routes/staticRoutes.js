import express from "express";
import routes from "../routes";
import {
    getLine
} from "../Controller/lineController"
import {
    getCalendar
} from "../Controller/calendarController"

const staticRoutes = express.Router();

var statics = routes.statics;
staticRoutes.post(statics+routes.getLine,getLine);
staticRoutes.post(statics+routes.getCalendar,getCalendar);

export default staticRoutes;