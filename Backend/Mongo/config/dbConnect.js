import mongoose from "mongoose";

export const dbConnect=()=>{
    try{
    mongoose.connect(process.env.MONGO_URL)
   console.log("database connectef")
    }
    catch(err){
        console.log("err",err)
    }

}