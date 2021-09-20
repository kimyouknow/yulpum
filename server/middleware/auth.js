import User from"../models/User";
export const auth =(req, res, next)=>{
    //클라이언트 쿠키에서 토큰 가져와서 
    //복호화함
    
    let token = req.cookies.user_auth;

    User.findByToken(token, (err,query,user)=>{
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error:true});
        // console.log('?',user);
        req.token = token;
        req.user = user;
        next();
    })
    

}


