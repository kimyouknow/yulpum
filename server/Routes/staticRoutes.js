import express from "express";
import routes from "../routes";
import {
    getLine
} from "../Controller/lineController"
import {
    getCalendar
} from "../Controller/calendarController"

const staticRoutes = express.Router();

staticRoutes.post(routes.getLine,getLine);
staticRoutes.post(routes.getCalendar,getCalendar);

export default staticRoutes;