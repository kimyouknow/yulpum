import User from "../models/User";
import Subject from "../models/Subject";
//active page에서 공부 종료시 실행
export const saveStudy =(req,res)=>{
    const {
        user_id,
        token,//유저 토큰과
        subject,///과목 이름과 
        time//집중시간 받음
        
    }=req.body;
 

    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        const study = await user.populate("studySubject");
        console.log(study);//확인용
        let found = study.find(study => study.Subject === subject);
        console.log(found);//확인용
        found.time += time;
        user.save();
        res.status(200);
    });
}

//home에서 과목 추가시 업데이트
export const addSubject = (req,res)=>{
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
        res.status(200);
    });

}