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

app.get("/", async (req, res) => {
  const result = await db.query(
    "SELECT name, age from users where age > $1 and name = $2",
    [18, "Ragul"]
  );
  console.log(result.rows);
  res.send(result.rows);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
