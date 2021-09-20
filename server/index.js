import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes";
import homeRoutes from "./Routes/homeRoutes";
import staticRoutes from "./Routes/staticRoutes";
import plannerRoutes from "./Routes/plannerRoutes";
import rankRoutes from "./Routes/rankRoutes";
import groupRoutes from "./Routes/groupRoutes";
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


app.use(routes.api,homeRoutes);
app.use(routes.api,staticRoutes);
app.use(routes.api,plannerRoutes);
app.use(routes.api,rankRoutes);
app.use(routes.api,groupRoutes);

const handleListenning = () =>{ 
    console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListenning);