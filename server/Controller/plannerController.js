import User from "../models/User";
import Subject from "../models/Subject";
import Planner from "../models/Planner";

export const getPlanner = async(req,res)=>{

    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        const study = user.populate("myCalender");
  
    });

};