import mongoose from "mongoose";


const myStudentSchema=new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    }
})

const StudentModel=mongoose.model("student",myStudentSchema);
export default StudentModel;