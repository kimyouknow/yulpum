import Group from "../models/Group";
import User from "../models/User";


export const getMyGroup = async(req,res)=>{

    const{
        token
    } = req.body;
    let myGroup;
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;
        await query.populate("groupID").then(data =>{
            myGroup= data.groupID;
         });

    
    });
    return res.status(200).json({
        myGroup
    });
    

}

export const findGroup = async(req,res)=>{

    const foundGroup = await Group.find()

    return res.status(200).json({
        foundGroup
    })
}


export const addGroup = async(req,res)=>{
    const{
        token,
        group_id // 들어가고자 하는 group의 id
    } = req.body;
    let isComplete;
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;
        isComplete =await User.findById(user._id).groupID.push(group_id).save();

    });
    
    if(isComplete){
        return res.status(200);
    }
    else{
        return res.status(400);
    }
}


export const deleteGroup = async (req,res)=>{
    const{
        token,
        group_id // 삭제할 그룹 아이디
    } = req.body;

    //테스트 요망, 유저에도 자동으로 ref 삭제 되나?
    await Group.deleteOne({
        _id:group_id
    }).then(()=>{
        console.log("delete completed");
        return res.status(200);

    }).catch(err =>{
        console.log("error! :"+err);
    })


}