import mongoose from 'mongoose';


const lineSchema = mongoose.Schema({
    l_user_id:{
        type:String,
    },
    l_subject_name:{
        type:String,
        maxlength:100
    },
    l_date:{
        type:Date,
        required:true
    },
    l_start_time:{
        type:String
    },
    l_end_time:{
        type:String
  
    },
    l_lapse:{
        type:Number,
        default:0
    }

})


const model = mongoose.model("Line",lineSchema);
export default model;