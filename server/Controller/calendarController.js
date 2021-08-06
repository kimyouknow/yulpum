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
        await query.populate("myCalendar").then(data=>{
            calendar = data.myCalendar;
        });

        let foundCal = calendar.find(e => e.c_date == new Date(year,month,date));
        
        let cal =await Calendar.findById(foundCal._id);
        let flag = 0;
        for(let i = 0 ; i < cal.todo.length() ; i++){
            if(cal.todo[i] === todo ){
                cal.todo.splice(i,1);
                i--;
                flag = 1;
            }
        }
        if(flag){
            res.status(200).json({
                isSuccess:true,
                });
        }
        else{
            console.log("todo 삭제 실패");
        }
     
    });
};


