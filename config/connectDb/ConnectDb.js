const mongoose=require("mongoose")
exports.connectDb=async()=>{
    await mongoose.connect('mongodb://localhost:27017/quizapp', {
    useNewUrlParser: true, // Boilerplate for Mongoose 5.x
    useUnifiedTopology: true,
})
  .then(()=>console.log("the connection to the db is successfull")
)};
// module.exports=connectDb