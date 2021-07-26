import mongoose from 'mongoose';


const plannerSchema = mongoose.Schema({
    p_subject_name:{
        type:String,
        maxlength:100
    },
    p_date:{
        type:Date,
        required:true,
        
    },
    p_start_time:{
        type:Date
    },
    p_end_time:{
        type:Date
    },
    p_lapse:{
        type:Number
    }

})


const model = mongoose.model("Planner",plannerSchema);
export default model;