import User from "../models/User";
import Subject from "../models/Subject";
import Calendar from "../models/Calendar";
import Line from "../models/Line";

//50명의 최대 공부 시간 유저들 표시
export const getRank = async(req,res)=>{

    const{
        token
    }=req.body
    let today = new Date();
    const now = today.toLocaleDateString(); //현재 시간 , 밀리세컨드 반환값
    let resultArr =[];

    const userRet = await User.find({nowStudy:1}).select('_id name studyStart'); //현재 공부 중인 유저들 id 반환

    //1. 공부중인 유저들
     
        for(let i = 0 ; i < userRet.length; i++){
            let tmp=await Calendar.findOne().where('c_user_id').equals(userRet[i]._id)
                .where('c_date').equals(now).sort({c_date:-1}).exec();
            if(tmp){    //1) 이전에 공부한 시간이 존재하는 유저, 가장 최근 달력의 시간을 가져옴
                console.log(tmp);
                let timeRet = tmp.c_total_time;
                timeRet += (today.getTime()- userRet[i].studyStart.getTime() )/1000;
               
                resultArr.push({
                    id:userRet[i]._id,
                    name : userRet[i].name,
                    totalTime : timeRet,
                    nowStudy:true
                });
                
            }else{//2) 최초 공부하는 유저, 달력 객체가 없음
           
                let timeRet =(today.getTime()- userRet[i].studyStart.getTime() )/1000;
    
                resultArr.push({
                    id:userRet[i]._id,
                    name : userRet[i].name,
                    totalTime : timeRet,
                    nowStudy:true
                });
            }   

        }

      
    
    //2. 공부 안하는 중인 유저들
        //1) 오늘 하루 총 공부시간 따짐
        const calRet =  await Calendar.find({c_date:now}).select('-_id c_user_id c_total_time'); //달력 정보 가져옴

        for(let i = 0 ; i < calRet.length; i++){
            let userFound= await User.findOne({_id:calRet[i].c_user_id }).exec();
            console.log(userFound);
            if(userFound){
                resultArr.push({
                    id : calRet[i].c_user_id,
                    name : userFound.name,
                    totalTime : calRet[i].c_total_time,
                    nowStudy:false
                })
            }
        
        }


    resultArr.sort( (a,b)=>b.totalTime - a.totalTime);
    console.log(resultArr);
        

    return res.status(200).json({
        resultArr

    })



    

    
} 