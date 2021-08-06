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
        const found =  timeLine.find(e=>{
              console.log(e.l_date.getTime());
              if(e.l_date.getTime() == time){
                  return true;}
          });//await 필요없음 
  


        console.log(found);

        if(!found){
            res.status(404);
            console.log("error, no such timeLine");

        }else{
            res.send(found);
            res.status(200);
        }
      
    });

};