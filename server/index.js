import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import dbconfig from "./config/dbconfig.js"

const connection = mysql.createConnection(dbconfig);

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

//유저 정보
app.get("/users",(req,res)=> {
    connection.query('SELECT * FROM users', (error,rows) =>{
        if(error) throw error;
        console.log('User info is :', rows);
        res.send(rows);

    });
});

app.listen(PORT, handleListenning);