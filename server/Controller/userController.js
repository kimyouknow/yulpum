import db from "../models/";

export const postRegister = async (req,res,next) =>{
  
    const param_name = req.body.name;
    const param_email = req.body.email;
    const param_password = req.body.password;
    console.log(param_name);
    console.log(param_email);
    console.log(param_password);

    const user = db.Users.build({

        name: param_name,
        email:param_email,
        password:param_password

    })


    await user.save();

    
};


export const postLogin = async(req,res,next) =>{

    console.log(req.body);
    console.log("postLogin enter\n");


};
