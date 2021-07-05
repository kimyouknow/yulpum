import express from "express";
import routes from "../routes";

const userRoutes = express.Router();

userRoutes.post(routes.saveStudy,saveStudy);


export default userRoutes;