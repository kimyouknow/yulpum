import express from "express";
import routes from "../routes";
import {
    getCalendar
} from "../Controller/calendarController"

const calendarRoutes = express.Router();


calendarRoutes.post(routes.getCalendar,getCalendar);

export default calendarRoutes;