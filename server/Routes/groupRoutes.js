import express from "express";
import routes from "../routes";
import {
    addGroup,
    deleteGroup,
    findGroup,
    getMyGroup,
    createGroup
}from  "../Controller/groupController";


const groupRoutes = express.Router();

var group = routes.group;
groupRoutes.post(group+routes.getMyGroup,getMyGroup);
groupRoutes.post(group+routes.addGroup,addGroup);
groupRoutes.post(group+routes.deleteGroup,deleteGroup);
groupRoutes.post(group+routes.createGroup,createGroup);
groupRoutes.get(group+routes.findGroup,findGroup);


export default groupRoutes;