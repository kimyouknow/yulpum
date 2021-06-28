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

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(routes.home, globalRoutes);
const handleListenning = () =>{ 
    //console.log(`✅ Listening on: http://localhost:${PORT}`);

};

app.listen(PORT, handleListenning);