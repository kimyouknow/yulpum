import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes.js";
import globalRoutes from "./Routes/globalRoutes";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

mongoose.connect(process.env.serverURL,{
    userNewUrlParser : true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('DB has been Connected.'))
.catch(err => console.log(err));

const app = express()
dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(routes.home, globalRoutes);

const handleListenning = () =>{ 
    console.log(`✅ Listening on: http://localhost:${PORT}`);

};

app.listen(PORT, handleListenning);