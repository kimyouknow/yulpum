import User from "../models/User";
import Subject from "../models/Subject";
import Calendar from "../models/Calendar";
import Line from "../models/Line";


export const getRank = async(req,res)=>{
    let today = new Date();
    const now = today.toLocaleDateString();
    let resultArr =[];
    const calRet = await Calendar.find({c_date:now}).sort({c_total_time:-1}).limit(50);
    const userRet = await User.find({c_date:now,isStudy:1});

    console.log("calRet "+calRet);
    console.log("userRet"+userRet);
    if(!ret){
    let studyStart;
    let nowStudy;
    let userName;
    let totalTime;
    for(let i = 0 ;  i < ret.length(); i++){
        let user = await User.find({_id:ret[i].c_user_id});
        totalTime = ret[i].c_total_time;
        userName = user.name;
        nowStudy = user.nowStudy;
        studyStart = user.studyStart;
        resultArr.push({name:userName, isStudy: nowStudy, startTime: studyStart, total: totalTime});

    }

    return res.status(200).json({
        resultArr
    })

    }else{
        console.log("there is no such calendar");
        return res.status(404);
      
    }

    

    
} 