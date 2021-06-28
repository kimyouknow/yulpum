import express from "express";
import routes from "../routes";
import {
    postRegister,
    postLogin

} from "../Controller/userController";

const globalRoutes = express.Router();

//globalRoutes.post(routes.login,postLogin)
globalRoutes.post(routes.register,postRegister)

export default globalRoutes;



