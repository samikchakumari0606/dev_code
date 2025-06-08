import myCurdModel from "../model/curd.js";

export const getData=async(req,res)=>{
    let data=await myCurdModel.find();
    res.status(200).send(data)
}

export const postData=async(req,res)=>{
     let data=new myCurdModel(req.body);
     let result=await data.save();
     res.status(200).send(result)
}

export const putData=async(req,res)=>{
    let data=await myCurdModel.updateOne(req.param,{
        $set:req.body
    })
    res.send(data)
}