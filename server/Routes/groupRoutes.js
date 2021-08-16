import express from "express";
import routes from "../routes";


const groupRoutes = express.Router();

var group = routes.group;
groupRoutes.get(routes.saveStudy,saveStudy);