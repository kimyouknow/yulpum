import express from "express";
import routes from "../routes";
import {
    getLine
} from "../Controller/lineController"


const lineRoutes = express.Router();

lineRoutes.post(routes.getPlanner,getPlanner);