import User from "../models/User";
import Line from "../models/Line";

export const getLine = async(req,res)=>{
    console.log("getLine Function ---");
    const {
        token,//유저 토큰과
        year,
        month,
        date
        
    }=req.body;

    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        let timeLine;
        await query.populate("myTimeline").then(data =>{
            timeLine=data.myTimeline
            
        })

        let time = new Date(year,month,date).getTime();
        let found=[];
        timeLine.find(e=>{
              if(e.l_date.getTime() == time){
                  found.push(e)
                }
          });//await 필요없음 
  

        if(!found){
            console.log("no timeLine");  
            return res.status(200).json({
                IsTimeLine:false
            });

        }else{
            console.log(found);
            return res.status(200).json({
                IsTimeLine:true,
                found
            });
        }
      
    });

};