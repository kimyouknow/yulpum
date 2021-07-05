import express from "express";
import routes from "../routes";
import {
    postRegister,
    postLogin

} from "../Controller/userController";
import{
    auth
} from "../middleware/auth";

const globalRoutes = express.Router();
globalRoutes.post(routes.register,postRegister);
globalRoutes.post(routes.login,postLogin);

globalRoutes.get(routes.auth, auth,(req, res)=>{
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false :true,
        isAuth: true,
    })
});

export default globalRoutes;



