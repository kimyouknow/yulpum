import express from "express";
import routes from "../routes";

import {
    saveStudy,
    addSubject,
    subjectDetail,
    getSubject,
    subjectDelete,
    subjectRevise,

} from "../Controller/subjectController"

import {
    postRegister,
    postLogin,
    logout,
    withdrawal
} from "../Controller/userController";

import{
    auth
} from "../middleware/auth";

const homeRoutes = express.Router();
homeRoutes.get(routes.auth, auth,(req, res)=>{
    res.status(200).json({
        userName: req.user.name,
        isAdmin: req.user.role === 0 ? false :true,
        isAuth: true,
        role:req.user.role
    })
});

homeRoutes.post(routes.register,postRegister);
homeRoutes.post(routes.login,postLogin);
homeRoutes.get(routes.logout,auth,logout);
homeRoutes.post(routes.withdrawal,withdrawal);

homeRoutes.post(routes.saveStudy,saveStudy);
homeRoutes.post(routes.addSubject,addSubject);
homeRoutes.post(routes.subjectDetail,subjectDetail);
homeRoutes.post(routes.getSubject,getSubject);
homeRoutes.post(routes.reviseSubject, subjectRevise);
homeRoutes.post(routes.deleteSubject,subjectDelete);

export default homeRoutes;