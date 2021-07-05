import mongoose from 'mongoose';

const subjectSchema = mongoose.Schema({

    subject_name:{
        type:String,
        required:true,
        maxlength:100
    },
    time:{
        type:String,
        default:"00:00:00"
    }

})


const model = mongoose.model("Subject",subjectSchema);
export default model;