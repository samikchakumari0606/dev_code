import express from "express";
import { postCurd } from "../../Express/controller/curdcontroller.js";
import { getCrud } from "../../Express/controller/curdcontroller.js";
import { putCurd } from "../../Express/controller/curdcontroller.js";
import { delCurd } from "../../Express/controller/curdcontroller.js";
const mycurd=express.Router();

mycurd.post("/post",postCurd)
mycurd.get("/get",getCrud)
mycurd.put("/putdata",putCurd);
mycurd.delete("/del",delCurd)

export default mycurd