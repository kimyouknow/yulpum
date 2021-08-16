import Group from "../models/Group";
import User from "../models/User";


export const getMyGroup = async(req,res)=>{

    const{
        token
    } = req.body;
    
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;
        let myGroup;
        await query.populate("groupID").then(data =>{
            myGroup= data.groupID;
         });


    });



}



