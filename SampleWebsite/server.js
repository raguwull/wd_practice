import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "myloginapp",
  password: "password",
  port: 5432,
});

db.connect();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/Client/home.html")
});

app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/Client/login.html")
});

app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/Client/register.html")
});

app.post("/login", async (req, res)=>{
    const name = req.body.username;
    const age = req.body.password;
    try {
        await db.query("INSERT INTO users (name, age) VALUES($1, $2)", [name, age, ]);
        console.log("Values inserted successfully");
        res.send("Login successfull!");
    } catch (error) {
        console.error(error);
    }
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
