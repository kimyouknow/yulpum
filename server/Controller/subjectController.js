import User from "../models/User";

export const saveStudy =(req,res)=>{
    const {
        //유저 토큰과
        ///과목 이름과 
        //집중시간 받음
        
    }=req.body;

    await User.findByToken(token, (err,user)=>{
        if(err) throw err;
        user

    })
}

export const addSubject = (req,res)=>{
    
    
}