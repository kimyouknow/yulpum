import express from "express";
import routes from "../routes";
import {
    getMyGroup
}from  "../Controller/groupController";


const groupRoutes = express.Router();

var group = routes.group;
groupRoutes.get(group+routes.getMyGroup,getMyGroup);



export default groupRoutes;