
import User from "../models/Users";
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
                console.log("Saveed");
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
    const user = await User.findOne({email: param_email, password: param_password});
    console.log(user);

    if(user){
        res.status(200).json({
            success:true
        })
        console.log(user.name + "접속!");
    }
    else{
        console.log("로그인 실패");
    }

};
