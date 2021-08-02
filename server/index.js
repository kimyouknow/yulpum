import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRoutes from "./Routes/globalRoutes";
import userRoutes from "./Routes/userRoutes";
import staticRoutes from "./Routes/staticRoutes";

import mongoose from "mongoose";
import cookieParser from "cookie-parser";


dotenv.config();
mongoose.connect(process.env.serverURL,{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('DB has been Connected.'))
.catch(err => console.log(err));

const app = express()
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// app.use(express.urlencoded({extends: true}));
app.use(cookieParser());

app.use(routes.api,routes.home, globalRoutes);
app.use(routes.api,routes.home,userRoutes);

app.use(routes.api,routes.statics,staticRoutes);



const handleListenning = () =>{ 
    console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListenning);