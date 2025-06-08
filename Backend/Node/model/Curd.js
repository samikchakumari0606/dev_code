import mongoose from "mongoose";

const CrudSchema=new mongoose.Schema({

    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    }
})

const CurdModel=mongoose.model("pro",CrudSchema);
export default CurdModel;

