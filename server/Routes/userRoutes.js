import express from "express";
import routes from "../routes";
import {
    saveStudy,
    addSubject
} from "../Controller/subjectController"

const userRoutes = express.Router();

userRoutes.post(routes.saveStudy,saveStudy);
userRoutes.post(routes.addSubject,addSubject);

export default userRoutes;