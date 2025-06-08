import express from "express";
const myCurd=express.Router();


myCurd.get("/",(req,res)=>{
    res.send("this is my get request")
})

myCurd.post("/post",(req,res)=>{
    res.send("this is post request")
})

myCurd.put("/put/:id",(req,res)=>{
    res.send("this is your put request")
})

myCurd.delete("/del/:id",(req,res)=>{
    res.send("this is your route del request")
})

export default myCurd;