import express from "express";
import { getStudentData } from "../controller/Student.js";
const studentdata=express.Router();

studentdata.get("/getStudentData",getStudentData)

export default studentdata