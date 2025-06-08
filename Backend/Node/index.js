import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
import mycurd from "./route/curdRoute.js";

const app=express();

dotenv.config()
dbConnect();
app.use(express.json())

let MYPORT=process.env.PORT||5000

app.get("/",(req,res)=>{
        res.send("welcome")
})

app.use("/curd",mycurd)



app.listen(MYPORT,()=>{
        console.log(`server is listning on ${MYPORT}`)
})