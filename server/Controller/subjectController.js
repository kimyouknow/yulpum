import User from "../models/User";
import Subject from "../models/Subject";
import Calendar from "../models/Calendar";
import Line from "../models/Line";


async function userUpdate(user){  //유저의 상태를 study 중인걸로 바꾸고, 공부 시작 시간을 기록함
    const now = new Date().toLocaleDateString();
    user.nowStudy = 1;
    user.studyStart = now;


}

async function userAfterUpdate(user){ //유저의 study 상태를 0으로 바꾸고 공부 시작 시간을 reset
    user.nowStudy = 0;
    user.studyStart = new Date(0,0,0);

}

async function CalendarCheck (timeValue,user){ //캘린더 생성과 갱신 관련 함수
          //달력 객체 추가 혹은 업데이트 부분
   
    const now = new Date().toLocaleDateString();
    await Calendar.exists({c_user_id:user._id,c_date:now},async(err,ret)=>{
        if(err){
            console.log(err);
        }else{
            if(ret){ //이미 오늘날짜 캘린더 객체 존재한다면
                
                console.log("캘린더 객체 이미 존재");
                const cal = await Calendar.findOne({c_user_id:user._id,c_date:now});
                cal.c_total_time += timeValue;
               await cal.save();
            }else{
                console.log("캘린더 객체 새로 생성");
                const calendar = await Calendar.create({
                    c_user_id:user._id,
                    c_total_time:timeValue,
                    c_date:now
                });
                //어떻게 들어가나 확인
                console.log(calendar);
                user.myCalendar.push(calendar);
     
            }

        
        }
    });


}


async function TimelineUpdate(timeVal,subject,user){ // 타임라인 생성과 갱신 관련 함수

    let today = new Date();
    const now = today.toLocaleDateString();
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds(); // 초
    let line = await Line.find({l_user_id:user._id,l_date:now, l_subject_name: subject.subject_name});
    console.log("가장 마지막 timeLine을 업데이트 함:" + line[line.length-1]);

    line[line.length-1].l_lapse += timeVal;
    line[line.length-1].l_end_time = String(hours+":"+minutes+":"+seconds);
    line[line.length-1].save();



}

async function TimelineCreate(study,user){
    console.log("TimelineCreate, param is :");
    console.log(study)
    let today = new Date();
    const now = today.toLocaleDateString(); //년월일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds(); // 초

    const line = await Line.create({
       l_user_id:user._id,
       l_subject_name: study.subject_name,
       l_date:now,
       l_start_time:String(hours+":"+minutes+":"+seconds)
        
    });
    
    user.myTimeline.push(line);


}

//active page에서 공부 종료시 실행
export const saveStudy =async(req,res)=>{
    console.log("SaveStudy Function --");
    const {
        token,//유저 토큰과
        subject_id,///과목 id와
        timeValue//집중시간 받음
        
    }=req.body;


    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
        let studyRet;
        console.log(subject_id);
        await query.populate("studySubject").then(data=>{
            studyRet = data.studySubject;
        
        });
        let found =  studyRet.find(e=> e._id == subject_id);
       
        
        found.total_time += timeValue;
        //추가됨 테스트 필요
        found.nowStudy = 0;
        found.studyStart = new Date().toLocaleDateString();
        user.save();
        if(!found){
            res.status(404);
            console.log("error, no subject found");
  

        }else{
            const subject = await Subject.findById(subject_id);
            subject.total_time += timeValue;
            subject.save();
            await CalendarCheck(timeValue,user);
            await TimelineUpdate(timeValue,found,user);//과목 모델, 쿼리
            await userAfterUpdate(user);
            user.save();
            
            res.status(200).json({
                isWell: true
            });
        }
      
    
  

        res.status(200);
    });
}

//home에서 과목 추가시 업데이트
export const addSubject = async(req,res)=>{
    const {
        subject_title, //과목명
        timeValue,
        token
      
    }=req.body;

    
    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;

        const duplicate = await Subject.exists({ s_user_id:user._id,subject_name:subject_title});
        if(duplicate){ //이미 해당 과목 이름이 있으면 추가하지 않음
            console.log("이미 있는 과목 중복 추가 못함");
            return res.send(400).json({
                isDuplicate:true,
                isSuccess:false
            })
        }
        else{
            const Study = await Subject.create({
                s_user_id:user._id,
                subject_name:subject_title,
                time:timeValue
            });
            user.studySubject.push(Study);
            user.save();
            console.log(Study);
            res.status(200).json({
                isSuccess:true,
                Study
            });
        }
   
    });

}


//home 에서 괴목 명과 시간 띄워줌
export const getSubject = async(req,res)=>{
    const {
        token//유저 토큰
      
    }=req.body;

    await User.findByToken(token, async(err,query,user)=>{
        if(err) throw err;
           
        const subject = await query.populate("studySubject").then(data =>{
            return data.studySubject;
        });
 
        let today = new Date();
        const now = today.toLocaleDateString();
        const line = await Line.find({l_user_id:user._id,l_date:now}); //유저에 대한 당일 공부 정보들.
        res.status(200).json({
            line,
            subject
        });
        
     
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
            res.stats(404);
            console.log("error, no subject");

        }else{
            console.log(found);
            await TimelineCreate(found,user);
            await userUpdate(user);
            await user.save();
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
            await subject.save();
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
           console.log("지우다 "+ subject_id);
            //db에서 해당 subject 정보 삭제
            const subject =  await Subject.findOne({_id:subject_id});
            subject.deleteOne();

            return res.status(200).json({
                isSuccess:true
            });
        }
        else{
            console.log("못찾음");
            res.status(404);
            res.send(found);
            res.status(200);
        }
    });
};