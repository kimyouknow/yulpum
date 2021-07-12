import User from "../models/users";
import Subject from "../models/Subject";
//active page에서 공부 종료시 실행
export const saveStudy = async(req,res)=>{
    const {
        user_id,
        token,//유저 토큰과
        subject,///과목 이름과 
        time//집중시간 받음
        
    }=req.body;
 

    await User.findByToken(token, (err,user) => {
        if(err) throw err;
        const study = user.populate("studySubject");
        console.log(study);//확인용
        let found = study.find(study => study.Subject === subject);
        console.log(found);//확인용
        found.time += time;
        user.save();
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
        }
        else{
            res.send(found);
            res.status(200);
        }
    });
};