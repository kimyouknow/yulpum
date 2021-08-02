import mongoose from 'mongoose';


const lineSchema = mongoose.Schema({
    l_subject_name:{
        type:String,
        maxlength:100
    },
    l_date:{
        type:Date,
        required:true,
        
    },
    l_start_time:{
        type:Date
    },
    l_end_time:{
        type:Date
    },
    l_lapse:{
        type:Number
    }

})


const model = mongoose.model("Line",lineSchema);
export default model;