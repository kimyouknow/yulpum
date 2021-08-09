import User from "../models/User";
import Subject from "../models/Subject";
import Calendar from "../models/Calendar";
import Line from "../models/Line";


export const getRank = async(req,res)=>{
    let today = new Date();
    const now = today.toLocaleDateString();

    const ret = await Calendar.find({c_date:now}).sort({c_total_time:-1}).limit(100);
    console.log(ret);
    
    for(let i = 0 ;  i < ret.length(); i++){
        r
    }
    

    
} 