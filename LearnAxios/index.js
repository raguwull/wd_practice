import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

app.post("/", async (req, res) => {
  try {
    const type = req.body.type;
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}`
    );
    var data = response.data;
    res.send(data[0].activity);
  } catch (error) {
    console.error("Failed to make request :", error.message);
    res.status(500).send("Failed to fetch activity");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});