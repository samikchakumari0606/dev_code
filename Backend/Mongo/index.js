import express from "express";
import dotenv from "dotenv";
import studentdata from "./route/Student.js";
import curd from "./route/curd.js";
import { dbConnect } from "./config/dbConnect.js";

const app=express();
// dbConnect()
dotenv.config()
app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("this is home")
// })

app.use("/student",studentdata)
app.use("/maincurd",curd)

app.listen(8000,()=>{
    console.log("server is listning on port 8000")
})