import mongoose from 'mongoose';
import User from "./User";

const groupSchema = mongoose.Schema({

    g_name:{
        type:String
    },
    g_description:{
        type:String,
        maxlength: 200,
        default:"설명이 없습니다."
    },
    g_user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    g_goal:{
        type:Number,
        default:0,
        required:true
    },
    g_max:{
        type:Number,
        default:10,
        required:true
    },
    g_current:{
        type:Number,
        default:1
    },
    g_leader:{
        type:String,
        required:true
    },
    g_mean_time:{
        type:Number,
        default:0
    },
    g_start_date:{
        type:Date
    }
    
    
})


const model = mongoose.model("Group",groupSchema);
export default model;