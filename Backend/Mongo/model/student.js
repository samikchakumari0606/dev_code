import mongoose from "mongoose";

const myStudentSChema=new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const StudentModel=mongoose.model("student",myStudentSChema)
export default StudentModel;