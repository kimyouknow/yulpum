import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes.js";
import globalRoutes from "./Routes/globalRoutes";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();
mongoose.connect(process.env.serverURL,{
    userNewUrlParser : true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('DB has been Connected.'))
.catch(err => console.log(err));

const app = express()


const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(routes.home, globalRoutes);
app.post("/api/getSubject", (req, res) => {
    // console.log(req.body);
    return res.send("hi");
})

app.post("/api/update-time", (req, res) => {
    const {token, timeValue} = req.body;
    return  res.json({
        isWell:true,
        token,
        timeValue
    });
})


const handleListenning = () =>{ 
    console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListenning);