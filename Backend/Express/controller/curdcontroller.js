import CurdModel from "../../Node/model/Curd.js";

export const postCurd=async(req,res)=>{
 
    let data=new CurdModel(req.body);
    let result=await data.save();
    res.send(result)
}

export const getCrud=async(req,res)=>{
    let data=await CurdModel.find()
    res.status(200).send(data)
}

export const putCurd=async(req,res)=>{
    let data=await CurdModel.updateOne(req.param,{
          $set:req.body
    }
       
    )
    res.status(200).send(data)
    
}

export const delCurd=async(req,res)=>{
    let data=await CurdModel.deleteOne();
    res.status(201).send(data)
}