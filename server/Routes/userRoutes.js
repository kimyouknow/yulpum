import express from "express";
import routes from "../routes";
import {
    saveStudy,
    addSubject,
    subjectDetail,
    getSubject
} from "../Controller/subjectController"

const userRoutes = express.Router();

userRoutes.post(routes.saveStudy,saveStudy);
userRoutes.post(routes.addSubject,addSubject);
userRoutes.get(routes.activepage,routes.subjectDetail,subjectDetail);
userRoutes.get(routes.getSubject,getSubject);

export default userRoutes;