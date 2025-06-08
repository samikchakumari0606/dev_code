import express from "express";
import { getMyStudentDetails } from "../controller/basic.js";
const mybasic=express.Router();

mybasic.get("/mybasic",getMyStudentDetails)

export default mybasic