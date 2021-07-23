import mongoose from 'mongoose';

const subjectSchema = mongoose.Schema({

    subject_name:{
        type:String,
        required:true,
        maxlength:100
    },
    total_time:{
        type:Number,
        default:0
    }

})


const model = mongoose.model("Subject",subjectSchema);
export default model;