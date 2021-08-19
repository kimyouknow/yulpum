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

export const createGroup = async(req,res)=>{
    const{
        token,
        groupName,
        groupMax,
        groupGoal
    }= req.body;

    const now = new Date().toLocaleDateString();
    let foundUser;
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;
      
        const n_group = await Group.create({
            g_name : groupName,
            g_goal : groupGoal,
            g_max : groupMax,
            g_leader:user.name,
            g_start_date:now
        });
        
        user.groupID.push(n_group);
        user.save();
    });


    

};


export const deleteGroup = async (req,res)=>{
    const{
        token,
        group_id // 삭제할 그룹 아이디
    } = req.body;
    let isComplete;
    let foundUser;
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;
        foundUser = user;

    });
    const group = await Group.find({_id:group_id, g_leader: foundUser.name});
    if(group){
        //테스트 요망, 유저에도 자동으로 ref 삭제 되나?
        await Group.deleteOne({
            _id:group_id
        }).then(()=>{
            console.log("delete completed");
            isComplete = true;
        

        }).catch(err =>{
            console.log("error! :"+err);
        })

        if(isComplete){
            return res.status(200).json({
                isSuccess : true
            });
        }
        else{
            return res.status(400).json({
                isSuccess : false
            })
        }
    }
    else{
        console.log("해당 그룹장만 그룹 삭제 가능");
        return res.status(400).json({
            isSuccess : false
        })
    }

}

export const exitGroup = async(req,res)=>{
    const{
        token,
        group_id // 삭제할 그룹 아이디
    } = req.body;
    let isComplete;
    let foundUser;
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;
        foundUser = user;

    });

    //가입된 그룹에서 삭제
    for(let i = 0; i < foundUser.groupID.length; i++) {
        if(foundUser.groupID[i] === group_id)  {
            foundUser.groupID.splice(i, 1);
            isComplete = true;
            break;
        }
    }
    if(isComplete){
        return res.status(400).json({
            isSuccess : false
        })

    }else{
        console.log("그룹 나가기 실패");
        return res.status(400).json({
            isSuccess : false
        })
    }
      

}