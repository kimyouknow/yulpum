import User from "../models/User";
import Subject from "../models/Subject";
import Calendar from "../models/Calendar";
import Line from "../models/Line";

//50명의 최대 공부 시간 유저들 표시
export const getRank = async(req,res)=>{
    let today = new Date();
    const now = today.toLocaleDateString();
    let resultArr =[];
    const calRet = await Calendar.find({c_date:now});
    const userRet = await User.find({isStudy:1}); 
    
    console.log("calRet "+calRet);
    console.log("userRet"+userRet);
    //1. 공부중인 유저들
        //1) 이전에 공부한 시간이 존재하는 유저
        // await calRet.find({c_user_id:})
    
        //2) 최초 공부하는 유저
    
    //2. 공부 안하는 중인 유저들
        //1) 오늘 하루 총 공부시간 따짐


    // if(!ret){
    // let studyStart;
    // let nowStudy;
    // let userName;
    // let totalTime;
    // for(let i = 0 ;  i < ret.length(); i++){
    //     let user = await User.find({_id:ret[i].c_user_id});
    //     totalTime = ret[i].c_total_time;
    //     userName = user.name;
    //     nowStudy = user.nowStudy;
    //     studyStart = user.studyStart;
    //     resultArr.push({name:userName, isStudy: nowStudy, startTime: studyStart, total: totalTime});

    // }

    // return res.status(200).json({
    //     resultArr
    // })

    // }else{
    //     console.log("there is no such calendar");
    //     return res.status(404);
      
    // }

    

    
} 