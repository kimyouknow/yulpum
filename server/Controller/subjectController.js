import User from "../models/User";
import Subject from "../models/Subject";
//active page에서 공부 종료시 실행
export const saveStudy = async(req,res)=>{
    const {
        token,//유저 토큰과
        id,///과목 id 
        timeValue//집중시간 받음
        
    }=req.body;
 

    await User.findByToken(token, (err,user) => {
        if(err) throw err;
        let studyRet;
        user.populate("Subject").then((err,data)=>{
            subject = data;
        });
        console.log("saveStudy : "+subject);//확인용
        let found = studyRet.find(study => study._id === id);
        console.log(found);//확인용
        found.time += timeValue;
        user.save();
        res.status(200);
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
    
    await User.findByToken(token, (err,user)=>{
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
   
    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        console.log("heleleoleo");
        user.populate("studySubject").then(data =>{
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
    await User.findByToken(token, async(err,user)=>{
        if(err) throw err;
        let study;
        await user.populate("studySubject").then(data =>{
            study = data.studySubject;
         })

        const found = study.find(e=>{
            if(e._id == subject_id) return true;
        });
        console.log(found);//확인용
        if(!found){
            res.status(404);
            console.log("error, no subject");

        }else{
            res.send(found);
            res.status(200);
        }
    
    });
};