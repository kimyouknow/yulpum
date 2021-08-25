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
         return res.status(200).json({
            myGroup
        });
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
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;

        const duplicate = user.groupID.find(e=>{
            if(e == group_id)return true;
        });
        if(duplicate){
            console.log("그룹 중복");
            return res.status(400).json({
                isDuplicate:true,
                isSuccess:false
            });

            
        }
        else{
            user.groupID.push(group_id);
            user.save();
            console.log("그룹 추가 완료");
            return res.status(400).json({
                isDuplicate:false,
                isSuccess:true
            });
        }
     
    });
    
  
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
            g_leader:user.name,
            g_start_date:now,
            g_description:groupDesc
        });
        
        user.groupID.push(n_group);
        await user.save();

        return res.status(400).json({
            isDuplicate:false,
            isSuccess:true
        });
    });

};


// export const deleteGroup = async (req,res)=>{
//     const{
//         token,
//         group_id // 삭제할 그룹 아이디
//     } = req.body;
//     let isComplete;

//     await User.findByToken(token, async(err,query,user)=>{
//     //테스트 요망, 유저에도 자동으로 ref 삭제 되나?
//     await Group.deleteOne({
//         _id:group_id
//     }).then(()=>{
//         console.log("delete completed");
//         isComplete = true;
       

//     }).catch(err =>{
//         console.log("error! :"+err);
//     })

//     });
//     const group = await Group.find({_id:group_id, g_leader: foundUser.name});
//     if(group){
//         //테스트 요망, 유저에도 자동으로 ref 삭제 되나?
//         await Group.deleteOne({
//             _id:group_id
//         }).then(()=>{
//             console.log("delete completed");
//             isComplete = true;
        

//         }).catch(err =>{
//             console.log("error! :"+err);
//         })

//         if(isComplete){
//             return res.status(200).json({
//                 isSuccess : true
//             });
//         }
//         else{
//             return res.status(400).json({
//                 isSuccess : false
//             })
//         }
//     }
//     else{
//         console.log("해당 그룹장만 그룹 삭제 가능");
//         return res.status(400).json({
//             isSuccess : false
//         })
//     }



// }

export const getGroupDetail = async(req, res)=>{
    const{
        group_id,
        year,
        month
    }=req.body;
    let userArr=[];
    //현재 공부 중인 멤버
    const group = await Group.findOne({_id:group_id});
    const users = await group.populate("g_user").then(data=>{
        return data.g_user;
    });


    console.log("그룹의 멤버들    "+ users);
    
    users.forEach(async function(e){
        //출석부, 캘린더 객체를 통해 해당월 일별로 해당 유저 공부시간 계산
        const calendar = await Calendar.find({c_user_id:e._id,c_date:{
            $gt : new Date(year,month,1),
            $lt : new Date(year,month,31)
            }
        });
        
    
        if(e.nowStudy == 1){
            userArr.push({
             nowStudy : 1,

            })
    
        }
        else{
            userArr.push({
             nowStudy : 0,
             
            })
    
        }




    });
    
    


    


}

export const exitGroup = async (req,res)=>{
    const{
        token,
        group_id
    } = req.body;

    await User.findByToken(token, async(err,query,user)=>{

        const group = await Group.find({_id:group_id});

        //그룹 리더는 방을 삭제함
        if(group.g_leader === user.name){
            console.log("그룹 리더는 방을 삭제함");
            const group = await Group.find({_id:group_id, g_leader: user.name});
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
        } //그룹 리더가 아니면 방을 나감
        else{
            let flag = 0;
            //그룹 나가기
            for(let i = 0 ; i <  user.groupID.length ; i++){
                if( user.groupID[i] === group_id){
                    user.groupID.splice(i,1);
                    flag=1;
                    break;
                }
            }
            //그룹 유저 목록에서 삭제
            for(let i = 0 ; i< group.g_user.length ;i++){
                if(group.g_user[i] == user_id){
                    user.g_user.splice(i,1);
                    flag = 1;
                    break;
                }
            }

            if(flag){
                console.log("나가기 성공");
                return res.status(200).json({
                            isSuccess:true
                        })
            }
            else{
                console.log("나가기 실패");
                    return res.status(400).json({
                        isSuccess:false
                    })
            }
    

        }
        
    
    });



}