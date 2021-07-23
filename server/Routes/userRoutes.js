import express from "express";
import routes from "../routes";
import {
    saveStudy,
    addSubject,
    subjectDetail,
    getSubject,
    subjectDelete,
    subjectRevise
} from "../Controller/subjectController"

const userRoutes = express.Router();

userRoutes.post(routes.saveStudy,saveStudy);
userRoutes.post(routes.addSubject,addSubject);
userRoutes.post(routes.subjectDetail,subjectDetail);
userRoutes.post(routes.getSubject,getSubject);

userRoutes.post(routes.reviseSubject, subjectRevise);
userRoutes.post(routes.deleteSubject,subjectDelete);


export default userRoutes;