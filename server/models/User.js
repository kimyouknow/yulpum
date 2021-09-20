import mongoose, { Schema } from 'mongoose';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import Calendar from "./Calendar";
import Line from "./Line";
import Subject from "./Subject";
import Group from "./Group";



const saltRounds = 10;

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        maxlength: 20,
        unique:1
        
    },
    email:{
        type:String,
        trim:true,
        unique: 1
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    },
    studySubject:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    }]
    ,
    groupID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Group"
    }]
    ,
    myCalendar:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Calendar"
    }],
    myTimeline:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Line"
    }],
    nowStudy:{
        type:Number,
        default:0
    },
    studyStart:{
        type:Date
    }
    
})

//DB저장 전에 비밀번호 암호화
userSchema.pre('save',function(next){
    let user = this;

    //password field가 변경될때만 암호화 거침
    if(user.isModified('password')){
    //비밀번호 암호화
    bcrypt.genSalt(saltRounds,function(err,salt){
        if(err) return next(err);
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })

    }else{
        next();
    }

})

userSchema.pre('deleteOne',{document:true},async function(next){
    console.log("유저 삭제 on cascade");
    await Calendar.deleteOne({c_user_id: this._id});
    await Line.deleteOne({l_user_id:this._id });
    await Subject.deleteOne({s_user_id:this._id});
    //await Group.deleteOne({g_user_id:this._id});

    next();

})


//스키마 메소드 추가
userSchema.methods.comparePassword= function(plainPassword,cb){
    //plain password의  암호화된 비밀번호와 DB 비밀번호와 비교
    bcrypt.compare(plainPassword, this.password, function(err,isMatch) {
        if(err) return cb(err);
        cb(null,isMatch);

    })

    
}

userSchema.methods.genToken = function(cb){
    let user = this;
   
    //토큰 생성
    let token = jwt.sign(user._id.toHexString(),process.env.tokenSecret);
    user.token = token;
    user.save(function(err,user){
        if(err)return cb(err);
        cb(null,user);
    });

}

userSchema.statics.findByToken = function(token,cb){
    var user = this;
   
    jwt.verify(token,process.env.tokenSecret, function(err, decoded){

        const query = user.findOne({"_id":decoded,"token":token}, function(err,user){
            if(err)return cb(err);
            cb(null,query,user);
            
        })
    })
}

const model = mongoose.model("User",userSchema);
export default model;