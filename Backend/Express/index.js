import express from "express";
import mybasic from "./route/mybasic.js";
import myCurd from "./route/curd.js";
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.js";


const app=express();
dotenv.config();
dbConnect()

let PORT=process.env.PORT||3000


// app.get("/",(req,res)=>{
//     res.send("home page........")
// })




app.use(express.json()) 

app.use("/curd",myCurd)
app.use("/mybasic",mybasic)

app.listen(PORT,()=>{
    console.log(`server is listning on ${PORT}`)
})