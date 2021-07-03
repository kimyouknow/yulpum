import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes.js";
import globalRoutes from "./Routes/globalRoutes";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://hyun:qwerty123@cluster0.cutzw.mongodb.net/yeoul_db?retryWrites=true&w=majority',{
    userNewUrlParser : true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('DB has been Connected.'))
.catch(err => console.log(err));

const app = express()
dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(routes.home, globalRoutes);
const handleListenning = () =>{ 
    console.log(`✅ Listening on: http://localhost:${PORT}`);

};

app.listen(PORT, handleListenning);