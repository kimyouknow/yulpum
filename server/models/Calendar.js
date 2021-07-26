import mongoose from 'mongoose';

const calendarSchema = mongoose.Schema({
    c_user_id:{
        type:String,
        unique:true,
        required:true

    },
    c_todo:{
        type:String
    },
    c_date:{
        type:Date,
        required:true
    }


})


const model = mongoose.model("Calendar",calendarSchema);
export default model;