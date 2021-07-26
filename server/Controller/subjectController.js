import User from "../models/User";
import Subject from "../models/Subject";
//active page에서 공부 종료시 실행
export const saveStudy =async(req,res)=>{
    const {
        user_id,
        token,//유저 토큰과
        subject,///과목 이름과 
        time//집중시간 받음
        
    }=req.body;
 

    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        const study = user.populate("studySubject");
        console.log(study);//확인용
        let found = study.find(study => study.Subject === subject);
        console.log(found);//확인용
        found.time += time;
        user.save();
        
        //달력 객체 추가 혹은 업데이트 부분
        const now = new Date();
        await Calendar.exists({c_date:new Date(now.getFullYear(),now.getMonth(),now.getDate())},(err,ret)=>{
            if(err){
                console.log(err);
            }else{
                if(ret){ //이미 오늘날짜 캘린더 객체 존재한다면
                    
                    await Calendar.find({c_user_id:user._id,c_date:now},(err,ret)=>{
                        if(err) throw err;
                        //뭐 찾았나 출력
                        console.log(ret);
                        ret.c_total_time +=time;
                        ret.save();
                    })
                }else{
                    const calendar = await Calendar.create({
                        c_user_id:user._id,
                        c_total_time:time,
                        c_date:now
                    });
                    //어떻게 들어가나 확인
                    console.log(calendar);
                    user.myCalendar.push(calendar);
                    user.save();
                }

             
            }
        });
    
  

        res.status(200);
    });
}

//home에서 과목 추가시 업데이트
export const addSubject = async(req,res)=>{
    const {
        user_id,
        token,//유저 토큰과
        subject
      
    }=req.body;
    const Study = await Subject.create({
        subject_name:subject,
        time:0
    });
    
    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        user.studySubject.push(Study);
        user.save();
        console.log(Study);
        res.status(200).json({
            isSuccess:true,
            Study
        });
    });

}


//home 에서 괴목 명과 시간 띄워줌
export const getSubject = async(req,res)=>{
    const {
        user_id,
        token,//유저 토큰과
        subject
      
    }=req.body;

    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        const subject = user.populate("studySubject");
        res.status(200).send(subject);
   
    });

};


///active page에서 detail을 띄워줌
export const subjectDetail = async(req,res)=>{

    const {
        user_id,
        token,//유저 토큰과 토큰 id
        subject
      
    }=req.body;
    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        const study = user.populate("studySubject");
        console.log(study);//확인용
        let found = study.find(study => study._id=== subject);
        if(!found){
            res.stats(404);
            console.log("error, no subject");

        }else{
            res.send(found);
            res.status(200);
        }
    
    });
};


export const subjectRevise = async(req,res)=>{
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

export const subjectDelete = async(req,res)=>{
    const {
        token, //유저 토큰
        subject_id// subject의 id
      
    }=req.body;
    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        let study;
        study = user.studySubject
        const found = study.find(e=>{
            if(e._id == subject_id) return true;
        });//await 필요없음 

        if(found){
           
            //db에서 해당 subject 정보 삭제
            await Subject.deleteOne({_id:subject_id},err=>{ //여기서 삭제되면 자동으로 parents에서도 삭제됨
                if(err){
                    console.log("삭제 에러");
                    res.send(err);
                }else{
                    console.log("deleted");
                    res.status(200).json({
                        isSuccess:true
                    });
                }
            });
            
        }
        else{
            res.send(found);
            res.status(200);
        }
    });
};