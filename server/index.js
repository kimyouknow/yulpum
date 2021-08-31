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
mongoose
  .connect(process.env.serverURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB has been Connected."))
  .catch((err) => console.log(err));

const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// app.use(express.urlencoded({extends: true}));
app.use(cookieParser());

app.use(routes.api, homeRoutes);
app.use(routes.api, staticRoutes);
app.use(routes.api, plannerRoutes);
app.use(routes.api, rankRoutes);
app.use(routes.api, groupRoutes);

// 리액트 정적 파일 제공
app.use(express.static("client/build"));
// console.log(express.static("client/build"));
// console.log(express.static("client/build"));
// 라우트 설정
app.get("*", (req, res) => {
  res.sendFile("/client/build/index.html");
});

const handleListenning = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListenning);
