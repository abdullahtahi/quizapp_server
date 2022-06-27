const express=require("express")
const router=express.Router();
const {sendquizresult,getquizresult,getsinglequizresult}=require("../Controller/Controllerquiz")
router.route("/postresult").post(sendquizresult)
router.route("/getquizresult").get(getquizresult)
router.route("/getsingleresult/:id").get(getsinglequizresult)
module.exports=router