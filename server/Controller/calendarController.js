import User from "../models/User";
import Subject from "../models/Subject";
import Calendar from "../models/Calendar";


export const getCalendar = async(req,res)=>{

    const{
        year,
        month,
        token
    }=req.body;
    let id;
    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        const calendar = user.populate("myCalender");
        id=calendar.user_id;
            

    });
    
    if(id){
        
        const ret = await Calendar.find({user_id:id, c_date:{
            $gte:new Date(year,month,1),
            $lt:new Date(year,month,31)

        }});
        //ret 결과 출력
        console.log(ret);
        res.send(200);

    }
    //토큰 찾지 못함
    else{
        console.log("Cannot find user by token");


    }
    



};