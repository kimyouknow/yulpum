import User from "../models/User";
import Subject from "../models/Subject";
import Line from "../models/Line";

export const getLine = async(req,res)=>{

    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        const study = user.populate("myCalender");
  
    });

};