import User from "../models/User";
import Subject from "../models/Subject";
//active page에서 공부 종료시 실행
export const saveStudy = async(req,res)=>{
    const {
        token,//유저 토큰과
        subject_id,///과목 id 
        timeValue//집중시간 받음
        
    }=req.body;
    // console.log(timeValue);
    await User.findByToken(token, async(err,query,user) => {
        if(err) throw err;
        let studyRet;
        await query.populate("studySubject").then(data=>{
            studyRet = data.studySubject;
        });
    
        const found = studyRet.find(e=>{
            if(e._id == subject_id) return true;
        });  //await 필요없음 
        
        if(!found){
            res.status(404);
            console.log("error, no subject");

        }else{
            const subject = await Subject.findById(subject_id);
            subject.time += timeValue;
            subject.save();
            res.status(200).json({
                isWell: true
            });
        }
     
    });
}

//home에서 과목 추가시 업데이트
export const addSubject = async(req,res)=>{
    const {
        subject_title,
        timeValue,
        token
      
    }=req.body;

    const Study = await Subject.create({
        subject_name:subject_title,
        time:timeValue
    });
    
    await User.findByToken(token, (err,query,user)=>{
        if(err) throw err;
        user.studySubject.push(Study);
        user.save();
        console.log("Study");
        console.log(Study);
        res.status(200);
    });

}


//home 에서 괴목 명과 시간 띄워줌
export const getSubject = async(req,res)=>{
    const {
         user_id,
         token,//유저 토큰과
         subject
      
    }=req.body;
   
    await User.findByToken(token, (err,query,user)=>{
        if(err) throw err;
      
        query.populate("studySubject").then(data =>{
            res.status(200).send(data.studySubject);
        })
 
      
    });


   

};


///active page에서 detail을 띄워줌
export const subjectDetail = async(req,res)=>{

    const {
        token, //유저 토큰
        subject_id// subject의 id
      
    }=req.body;
    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        let study;
        await query.populate("studySubject").then(data =>{
            study = data.studySubject;
         })
        const found = study.find(e=>{
            if(e._id == subject_id) return true;
        });//await 필요없음 

        if(!found){
            res.status(404);
            console.log("error, no subject");

        }else{
            res.send(found);
            res.status(200);
        }
    
    });
};


export const subjectRevise = async(res,req)=>{
    const {
        token, //유저 토큰
        subject_id,// subject의 id
        editSubject_title
    }=req.body;

    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        let study;
        await query.populate("studySubject").then(data =>{
            study = data.studySubject;
         });

         const found = study.find(e=>{
            if(e._id == subject_id) return true;
        });//await 필요없음 
        
        if(found){
            const subject = await Subject.findById(subject_id);
            subject.subject_name = editSubject_title;
            subject.save();
            res.status(200).json({
                isSuccess:true
            });

        }
        else{
            res.status(404);
        }



    });
}

export const subjectDelete = async(res,req)=>{
    console.log("진입");
    const {
        token, //유저 토큰
        subject_id// subject의 id
      
    }=req.body;
    console.log("token"+token);
    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        let study;
        study = user.studySubject
        console.log("delete 에러");
         const found = study.findIndex(e=>{
            if(e == subject_id) return true;
        });


        //await 필요없음 
        study.spilce(found,1);
        user.save();
         
        if(found){
            //db에서 해당 subject 정보 삭제
            await Subject.deleteOne({_id:subject_id},err=>{
                if(err){
                    console.log("삭제 에러");
                    res.send(err);
                }else{
                    console.log("deleted");
                    res.send("deleted");
                }
            });
            
  

        }
        else{
            res.status(404);
        }

    });
}