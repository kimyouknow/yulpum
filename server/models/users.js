import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        maxlength: 20
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
    }
    
})

const model = mongoose.model("User",userSchema);
export default model;