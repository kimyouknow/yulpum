import User from "../models/User";
import Subject from "../models/Subject";
//active page에서 공부 종료시 실행
export const saveStudy = async(req,res)=>{
    const {
        token,
        timeValue:time ,
        id
    }=req.body;
    await User.findByToken(token, (err,user) => {
        if(err) throw err;
        const study = user.populate("studySubject");
        console.log(study,time, "❗");//확인용 -> 여기까지 콘솔찍히고 그 다음줄 부터 에러남
        // subjectDetail 이거 함수에서도 같은 부분 에러났어(let found ~이 부분)
        // let found = study.find(study => study.Subject === subject);
        // console.log(found);//확인용
        // found.time += time;
        // user.save();
        // res.status(200);
    });
}

//home에서 과목 추가시 업데이트
export const addSubject = async(req,res)=>{
    const {
        subject,
        timeValue,
        token
    }=req.body;
    const Study = await Subject.create({
        subject_name:subject,
        time:timeValue
    });
    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        user.studySubject.push(Study);
        user.save();
        console.log("save well");
        res.status(200).send({
            isWell: true,
            subjects: user.studySubject
        });
        // 과목명 추가할때마다, 추가한 과목 배열다시보내줭
        // [{과목명, 시간, id}, ...]
    });

}


//home 에서 괴목 명과 시간 띄워줌
export const getSubject = async(req,res)=>{
    // const {
    //     user_id,
    //     token,//유저 토큰과
    //     subject
    // }=req.body;
    const {body: {token}} = req;
    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        const subject = user.populate("studySubject");
        res.status(200).send(subject);
    });
    // 유저에 해당하는 전체 과목 배열 보내주세요
    // [{과목명, 시간, id}, ...]
};


///active page에서 detail을 띄워줌
export const subjectDetail = async(req,res)=>{
    const {
        token, //유저 토큰
        subject: id // subject의 id
    }=req.body;
    console.log(req.body);
//     await User.findByToken(token, (err,user)=>{
//         if(err) throw err;
//         const study = user.populate("studySubject");
//         console.log(study);//확인용
//         // let found = study.find(study => study._id=== subject);
//         if(!found){
//             res.stats(404);
//             console.log("error, no subject");
//         }
//         else{
//             res.send(found);
//             res.status(200);
//         }
//     });
};