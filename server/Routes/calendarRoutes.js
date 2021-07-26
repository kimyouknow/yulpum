import express from "express";
import routes from "../routes";
import {
    getCalendar
} from "../Controller/calendarController"

const userRoutes = express.Router();


plannerRoutes.post(routes.getCalendar,getCalendar);