import http from "http"
import express from "express"
import mongoose from "mongoose"
import CORS from "cors"
// import * as dotenv from 'dotenv';
import userRouter from "./routes/userRoute.js"
import paymentRouter from "./routes/paymentRoute.js"
const MONGO_URI="mongodb+srv://vibhavtripathi365:<password123>@cluster0.gnxctfn.mongodb.net/?retryWrites=true&w=majority";
const app = express()
// dotenv.config(); 

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = process.env.PORT||8000


app.use(CORS())
app.use(express.json())

app.use('/',async(req,res)=>{
  return res.json({"welcome to flex app yoga":"flex"})
})
app.use("/user",userRouter)
app.use("/payment",paymentRouter)

//connecting mongodb
mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log('Database connection successfull.')
}).catch((err)=>{
    console.log(err)
})


const server = http.createServer(app);
//start the server
server.listen(port);
/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${port}/`);
});