import Users from "../models/";

export const postRegister = async (req,res,next) =>{
    res.send(req.body);
    console.log(req.body);
    console.log("postRegister enter\n");
    
    //const name = req.body 
    //const email = req.body... 
const {
 body: {name, email,password} 

} = req;

console.log("findAll\n");
console.log(Users.findAll({}));

    

};


export const postLogin = async(req,res,next) =>{

    console.log(req.body);
    console.log("postLogin enter\n");


};
