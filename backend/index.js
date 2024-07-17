import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
 import userRoute from "./routes/userRoute.js";
 import tweetRoute from "./routes/tweetRoute.js";

dotenv.config({
    path:".env"
})
databaseConnection();
const app = express();


// middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());//client side se data mera json format m ana chaiye
app.use(cookieParser());
const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));

// api
// api
app.use("/api/v1/user",userRoute);
app.use("/api/v1/tweet", tweetRoute);


app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
})




