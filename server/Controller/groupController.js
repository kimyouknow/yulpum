import Group from "../models/Group";
import User from "../models/User";
import Calendar from "../models/Calendar";

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
    console.log("group_id : "+ group_id)
    await User.findByToken(token, async(err,query,user)=>{
        if(err)throw err;
        console.log(group_id);
    
       const duplicate = user.groupID.find(e=>{
            console.log(e);
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
            const group = await Group.findOne({_id:group_id});
            if(group.g_current === group.g_max)
            {
                console.log("그룹 최대인원 초과");
                return res.status(400).json({
                    isSuccess:false
                });
            }
            else{
            group.g_user.push(user);
            group.g_current = group.g_current + 1;
            group.save();

            user.groupID.push(group);
            user.save();
            console.log("그룹 추가 완료");
            return res.status(200).json({
                group,
                isDuplicate:false,
                isSuccess:true
            });
            }
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

    const now = new Date();
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
        n_group.g_user.push(user);
        await n_group.save();
        user.groupID.push(n_group);
        await user.save();

        return res.status(200).json({
            n_group,
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
    console.log(year);
    console.log(month);

    
    //현재 공부 중인 멤버
    
    const users = await Group.findOne({_id:group_id}).populate("g_user").then(data=>{
    
        console.log("그룹의 멤버들 ininin  "+ data.g_user);
        return data.g_user;
    });


    console.log("그룹의 멤버들    "+ users);
    let retArr = [];


    for(let k = 0 ; k < users.length ; k++){
    
         for(let i = 0; i < 31 ; i++){
                //출석부, 캘린더 객체를 통해 해당월 일별로 해당 유저 공부시간 계산
            const isExist = await Calendar.exists({c_user_id:users[k]._id, c_date: new Date(year,month,i)});
            if(isExist){
            const calendar = await Calendar.find({c_user_id:users[k]._id, c_date: new Date(year,month,i)});
            let sum = 0;
            console.log("이 유저의 캘린더 " + calendar + "날짜는 ?? " + new Date(year,month,i));
            calendar.forEach(async function(cal){   
            sum += cal.c_total_time;  
            })
                console.log(users[k].name+"의 "+ i+ "일  총 공부시간 ==="+sum);
                retArr.push([i,{
                    userName:users[k].name,
                    nowStudy:users[k].nowStudy,
                    totalTime:sum
                }])
                
    
            
            }
        }

    
    
      
    }
   

    console.log("retArr "+ retArr);
    return res.status(200).json({
        isSuccess:true,
        retArr
    });


}

    
function group_del(group,userId){

    for(let i = 0 ; i< group.g_user.length ;i++){
        if(group.g_user[i] == userId){
            group.g_user.splice(i,1);
            return true;
        }
    }
}

function user_del(user,groupId){
        //그룹 나가기
         for(let i = 0 ; i <  user.groupID.length ; i++){
             if( user.groupID[i] ==groupId){
                 user.groupID.splice(i,1);
                 return true;
             }
                
        }

}

export const exitGroup = async (req,res)=>{
    const{
        token,
        group_id
    } = req.body;

    await User.findByToken(token, async(err,query,user)=>{

        const foundGroup = await Group.findOne({_id:group_id});

        //그룹 리더는 방을 삭제함
        if(foundGroup.g_leader === user.name){
            let isComplete;
            console.log("그룹 리더는 방을 삭제함");
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

    
        } //그룹 리더가 아니면 방을 나감
        else{
       
         
           const flag = await user_del(user,group_id);
           console.log(user);
           await user.save();
            //그룹 유저 목록에서 삭제

            const flag2 = await group_del(foundGroup, user.id);
            console.log(foundGroup);
            foundGroup.g_current = foundGroup.g_current - 1;
            await foundGroup.save();

            if(flag && flag2){
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