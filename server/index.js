import express from "express";
import dotenv from "dotenv";

const app = express()
dotenv.config();
const PORT = process.env.PORT || 4000;

const handleListenning = () => 
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.get('/', function (req, res) {
    res.send('Hello World!!');
})

app.get("/api/hello", (req, res) => {
    res.send("성공~")
})

app.listen(PORT, handleListenning);