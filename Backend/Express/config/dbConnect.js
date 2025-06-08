import mongoose from "mongoose";

export const dbConnect=()=>{
    try{
      mongoose.connect(process.env.MONGO_URL)
      console.log("database connected")
    }
    catch(err){
    console.log("error",err)
    }
}