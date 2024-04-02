import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// JSON that contains all necessary data about the artists
import artists from "./data.js";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));