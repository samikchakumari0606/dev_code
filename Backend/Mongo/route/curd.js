import express from "express";
import { getData } from "../controller/curd.js";
import { postData } from "../controller/curd.js";
import { putData } from "../controller/curd.js";
const curd=express.Router();

curd.get("/getCurd",getData)
curd.post("/postcurd",postData)
curd.put("/putcurd",putData)

export default curd