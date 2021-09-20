import mongoose from 'mongoose';
import Line from "./Line";
const subjectSchema = mongoose.Schema({

    s_user_id:{
        type:String
    },
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


subjectSchema.pre('deleteOne',{document:true},async function(next){
    let subject = this.subject_name;
    console.log("삭제된 과목 : " +subject );
    await Line.deleteOne({l_subject_name:subject});
    next();
})

const model = mongoose.model("Subject",subjectSchema);
export default model;