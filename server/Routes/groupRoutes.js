import express from "express";
import routes from "../routes";
import {
    addGroup,
    deleteGroup,
    findGroup,
    getMyGroup
}from  "../Controller/groupController";


const groupRoutes = express.Router();

var group = routes.group;
groupRoutes.post(group+routes.getMyGroup,getMyGroup);
groupRoutes.post(group+routes.addGroup,addGroup);
groupRoutes.post(group+routes.deleteGroup,deleteGroup);
groupRoutes.get(group+routes.findGroup,findGroup);


export default groupRoutes;