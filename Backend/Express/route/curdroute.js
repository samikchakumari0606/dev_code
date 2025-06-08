import express from "express";
import { postCurd } from "../controller/curdcontroller.js";

let curdRoute=express.Router();

curdRoute.post("/post",postCurd)

export default curdRoute