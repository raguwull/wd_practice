import express from "express";
import dotenv from "dotenv";
import pkg from "pg"; // Import the entire pg package

dotenv.config();

const { Client } = pkg; // Destructure the Client object from the pg package
const app = express();
const PORT = process.env.PORT || 3000;

const db = new Client({
    user: "ragulb",
    host: "localhost",
    database: "myloginapp",
    password: "password",
    port: 5432
});

db.connect();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
