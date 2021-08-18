import mongoose from 'mongoose';

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


subjectSchema.pre('delete',function(next){

    Line.remove({l_subject_name:this.subject_name}).exec();
    next();
})

const model = mongoose.model("Subject",subjectSchema);
export default model;