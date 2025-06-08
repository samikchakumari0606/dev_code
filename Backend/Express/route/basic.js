import express from "express";
import { getMyStudentDetails } from "../controller/basic";
const studentRoute=express.Router();


studentRoute.get("/app",(req,res)=>{
    res.send("this is student get route")
})

export default studentRoute