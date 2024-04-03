import express from "express";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "myloginapp",
  password: "password",
  port: 5432,
});

db.connect();

db.query("SELECT * from users", (err, res) => {
  if (err) console.error(err.error);
  else {
    var rows = res.rows;
    console.log(rows[0].name);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
