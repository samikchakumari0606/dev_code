import mongoose from "mongoose";

const mycurdSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        unique:true
    }

})

const myCurdModel=mongoose.model("product",mycurdSchema);
export default myCurdModel