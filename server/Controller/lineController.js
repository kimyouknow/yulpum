import User from "../models/User";
import Line from "../models/Line";

export const getLine = async(req,res)=>{

    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        let timeLine;
        await query.populate("myTimeline").then(data =>{
            timeLine=data.myTimeline
            
        })

        const found = timeLine.find(e=>{
            if(e._id == subject_id) return true;
        });//await 필요없음 

        if(!found){
            res.stats(404);
            console.log("error, no subject");

        }else{
            res.send(found);
            res.status(200);
        }
      
    });

};