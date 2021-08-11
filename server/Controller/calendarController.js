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

export const createTodo = async(req,res)=>{
    const{ 
        year,
        month,
        date,
        todo,
        token
    }=req.body;
    
    console.log("createTodo");
    console.log(year+ ":"+month+":"+date);

    console.log(todo);
    let Cdate = new Date(year,month,date);
    console.log(Cdate);
    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        let cal = await Calendar.findOne({c_user_id: user._id,c_date:Cdate});
        if(!cal){ //캘린더 없으면 새로 추가
    
            const calendar = await Calendar.create({
                c_user_id:user._id,
                c_date:Cdate
            });
            //어떻게 들어가나 확인
            console.log(calendar);
            user.myCalendar.push(calendar);
            user.save();
            cal = await Calendar.findOne({c_user_id: user._id,c_date:Cdate});
        }
        cal.c_todo.push(todo);
        cal.save();
        res.status(200).json({
        isSuccess:true,
        });

    });


};



export const deleteTodo = async(req,res)=>{
    //date로 특정 캘린더 객체의 todo를 삭제함
    const{
        year,
        month,
        date,
        token,
        todo
    }=req.body;

    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;

        console.log(todo);
        let calendar;
        await query.populate("myCalendar").then(data=>{
            calendar = data.myCalendar;
        });

        
        let time = new Date(year,month,date).getTime();
      

        let foundCal = calendar.find(e => {
            console.log(e.c_date.getTime());
            if(e.c_date.getTime() === time)return true;
        
        });
        
        console.log(foundCal);
        let cal =await Calendar.findById(foundCal._id);
        let flag = 0;
        for(let i = 0 ; i <  cal.c_todo.length ; i++){
            if( cal.c_todo[i] === todo ){
                cal.c_todo.splice(i,1);
                i--;
                flag = 1;
                break;
            }
        }
        if(flag){
            cal.save();
            return res.status(200).json({
                isSuccess:true,
                });
        }
        else{
            console.log("todo 삭제 실패");
        }
     
    });
};


