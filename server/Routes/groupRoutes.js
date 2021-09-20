import express from "express";
import routes from "../routes";
import {
    addGroup,
    deleteGroup,
    findGroup,
    getMyGroup,
    createGroup,
    exitGroup,
    getGroupDetail
}from  "../Controller/groupController";


const groupRoutes = express.Router();

var group = routes.group;
groupRoutes.post(group+routes.getMyGroup,getMyGroup);
groupRoutes.post(group+routes.addGroup,addGroup);
// groupRoutes.post(group+routes.deleteGroup,deleteGroup);
groupRoutes.post(group+routes.createGroup,createGroup);
groupRoutes.post(group+routes.exitGroup,exitGroup);
groupRoutes.get(group+routes.findGroup,findGroup);
groupRoutes.post(group+routes.getGroupDetail,getGroupDetail);

export default groupRoutes;