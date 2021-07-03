import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes.js";
import globalRoutes from "./Routes/globalRoutes";

let sequelize = require('./models/index').sequelize;


//const connection = mysql.createConnection(dbconfig);
const app = express()
dotenv.config();
sequelize.sync();
const PORT = process.env.PORT || 4000;

const handleListenning = () => 
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.get('/', function (req, res) {
    res.send('Hello World!!');
})

app.get("/api/hello", (req, res) => {
    res.send("성공~")
})

// // 잘되나 확인용~
// app.post("/api/login", (req, res) => {
//     return res.json({
//         message: "yes~~~~"
//     })
// })
// app.post("/api/register", (req, res) => {
//     return res.json({
//         message: "yes~~~~"
//     })
// })
// app.post("/api/add", (req, res) => {
//     return res.json({
//         isWell: true,
//         title: "코딩"
//     })
// })

//유저 정보
app.get("/users",(req,res)=> {
    connection.query('SELECT * FROM users', (error,rows) =>{
        if(error) throw error;
        console.log('User info is :', rows);
        res.send(rows);

};

app.listen(PORT, handleListenning);