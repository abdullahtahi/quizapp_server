const mongoose=require("mongoose")
const quizSchema=new mongoose.Schema({
    quizans:{
        type:String,
        message:"the quizans is required"
    },
    marks:{
        type:Number,
    }, 
    date:{
        type:Date
    },
    time:{
        type:Number
    }
})
module.exports=mongoose.model("quizresult",quizSchema)

// {
//     "quizans":"my name is abdullah",
//     "marks":'10'
// }