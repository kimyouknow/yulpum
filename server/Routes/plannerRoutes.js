import express from "express";
import routes from "../routes";
import {
    getPlanner
} from "../Controller/plannerController"


const plannerRoutes = express.Router();

plannerRoutes.post(routes.getPlanner,getPlanner);