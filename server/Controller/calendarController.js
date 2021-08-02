import User from "../models/User";
import Subject from "../models/Subject";
import Calendar from "../models/Calendar";


export const getCalendar = async(req,res)=>{

    const{
        year,
        month,
        token
    }=req.body;
    let calendar;
    let id;
    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        await query.populate("myCalendar").then(data=>{

            calendar = data.myCalendar;
            id = data._id;

        });
        if(calendar){
        
    
            const ret = await Calendar.find({c_user_id:id,c_date:{
                $gt : new Date(year,month,1),
                $lt : new Date(year,month,31)
                    }
                });
      
            //ret 결과 출력
            console.log("ret is@@@@");
            console.log(ret);
            
            res.status(200).json({
                isSuccess:true,
                ret
            });
        }
        //토큰 찾지 못함
        else{
            console.log("Cannot find user by token");
    
    
        }

    });
   
    



};