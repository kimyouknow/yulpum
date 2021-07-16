import User from "../models/User";
export const postRegister = async (req,res) =>{
  
    const param_name = req.body.name;
    const param_email = req.body.email;
    const param_password = req.body.password;
    
    const user = await User.findOne({name: param_name, email: param_email});

    if(user === null){
        try{
            const user = await User({
                name:param_name,
                email:param_email,
                password:param_password
            });
            await user.save((err)=>{
                if(err)return console.log(err);
                console.log("Saved");
            });
        }catch(error){
            console.log(error);
            res.json({
                success:false
            })
        }

        res.json({
            success:true
        })

    }
    else if(user){
        //이미 있음
        res.json({
            success:false
        })

    }

 
    
};
export const postLogin = async(req,res) =>{
    const param_email = req.body.email;
    const param_password = req.body.password;
    const user = await User.findOne({email: param_email});

    if(user){

        user.comparePassword(param_password,(err,isMatch)=>{
            if(!isMatch) return res.json({success: false, message:"비밀번호 틀림"});
            
            //비밀번호 맞으면 해당 유저 고유 토큰 생성
            user.genToken((err,user)=>{
                if(err)return res.status(400).send(err);
                
                //생성된 토큰 저장 => 쿠키 혹은 로컬 스토리지
                //쿠키이름 : user_auth
                res.cookie("user_auth",user.token).status(200).json({
                    success:true, userId:user._id
                })
                
            })

        })
  
        console.log(user.name + "접속!");
    }
    else{
        console.log("일치하는 아이디 없음: 로그인 실패");
    }

};

export const logout = async(req,res) =>{
    await User.findOneAndUpdate({_id:req.user._id},
    {token:""}
    ,(err,user)=>{
        if(err)return res.json({logoutSuccess:false, err});
        res.clearCookie("user_auth");
        return res.status(200).send({
            logoutSuccess:true
        });
    })
};


