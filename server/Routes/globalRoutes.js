import express from "express";
import routes from "../routes";
import {
    postRegister,
    postLogin,
    logout
} from "../Controller/userController";
import {
    saveStudy,
    addSubject,
    subjectDetail,
    getSubject
} from "../Controller/subjectController"
import{
    auth
} from "../middleware/auth";

const globalRoutes = express.Router();
globalRoutes.post(routes.register,postRegister);
globalRoutes.post(routes.login,postLogin);
globalRoutes.get(routes.logout,auth,logout);
globalRoutes.get(routes.auth, auth,(req, res)=>{
    res.status(200).json({
        user_id:req.user._id,
        isAdmin: req.user.role === 0 ? false :true,
        isAuth: true,
        role:req.user.role
    })
});

// globalRoutes.post(routes.saveStudy,saveStudy);
globalRoutes.post(routes.addSubject,addSubject);
globalRoutes.post(routes.subjectDetail,subjectDetail);
globalRoutes.post(routes.getSubject,getSubject);


export default globalRoutes;



