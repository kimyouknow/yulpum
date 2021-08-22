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
        groupGoal,
        groupDesc
    }= req.body;

    const now = new Date().toLocaleDateString();
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;
        const n_group = await Group.create({
            g_name : groupName,
            g_goal : groupGoal,
            g_max : groupMax,
            g_leader:foundUser.name,
            g_start_date:now,
            g_description:groupDesc
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

    await User.findByToken(token, async(err,query,user)=>{
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


    })

}

export const exitGroup = async (req,res)=>{
    const{
        token,
        group_id
    } = req.body;

    await User.findByToken(token, async(err,query,user)=>{

        const group = await Group.find({_id:group_id});

        //그룹 리더는 나갈 수 없음
        if(group.g_leader === user.name){
            console.log("그룹 리더는 그룹을 나갈 수 없다");
            return res.status(400).json({
                isSuccess:false
            });
        }
        else{
            const del=await Group.deleteOne({_id:group_id});
            if(del){
                console.log("나가기 성공");
                return res.status(200).json({
                    isSuccess:true
                })
            }else{
                console.log("나가기 실패");
                return res.status(400).json({
                    isSuccess:false
                })
            }

        }
        
    
    });



}