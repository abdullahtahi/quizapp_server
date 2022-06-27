const express=require("express")
const app=express();
var bodyParser = require('body-parser')
const cors=require("cors")
const quizdata=require("./Routes/Routes")
const {connectDb}=require("./config/connectDb/ConnectDb")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
// app.use(express.urlencoded())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000','http://localhost:3002');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
app.use("/quizapp",quizdata)
app.use(express.json())
const PORT=3001;
connectDb();
app.listen(PORT,()=>console.log('the server is running in the localhost 3001'))

