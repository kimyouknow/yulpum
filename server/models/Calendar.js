import mongoose from 'mongoose';

const calendarSchema = mongoose.Schema({
    c_user_id:{
        type:String,
    },
    c_todo:[{
        type:String,
        default:""
    }],
    c_date:{
        type:Date,

    },
    c_total_time:{
        type:Number,
        default:0
    }


})


const model = mongoose.model("Calendar",calendarSchema);
export default model;