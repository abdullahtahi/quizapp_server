const { request, response } = require("express")
const quizresult = require("../Schema/quizSchema")

exports.sendquizresult = async (request, response) => {
    try {
        console.log(request.body)
        const { quizans, marks } = request.body;
        const postquiz = await quizresult.create({
            quizans, marks,
            date: Date.now(),

        })
        console.log(postquiz)
        response.status(200).json({
            success: true,
            message: "the data is posted successfully",
            postquiz
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: "the post request api is not responding"
        })
    }
}
// exports.getquizdata=async(request,response)=>{
// try {
//     // const getdata=await quizresult.find();
//     response.status(200).json({
//         success:true,
//         message:"the quiz result is",
//         // getdata
//     })
// } catch (error) {
//     response.status(400).json({
//         success:false,
//         message:"the api is not responsing"
//     })
// }
// }
exports.getquizresult = async (request, response) => {
    try {
        const getresult = await quizresult.find()
        response.status(200).json(getresult)
    } catch (error) {
        console.log(error)
    }
}
exports.getsinglequizresult =async(request, response) => {
    try {
        const getsingle =await quizresult.findById(request.params.id)
       console.log(getsingle)
        response.status(200).json(getsingle)
    } catch (error) {
        response.status(400).json({
            success: true,
            message: "api problem",

        })
    }
}



// const hour=new Date().getHours();
// const minutes=date.getMinutes()
// const sec=date.getSeconds()
// time:hour,"/",minutes,"/",sec