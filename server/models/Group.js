import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({

    g_name:{
        type:String
    },
    
    g_goal:{
        type:Number,
        default:0
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
        type:Date,
        default:'0000-00-00'
    }
    
    
})


const model = mongoose.model("Group",groupSchema);
export default model;