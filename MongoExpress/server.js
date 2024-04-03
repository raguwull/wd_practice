import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(() => {
  console.log("Yaaaay! Connected to Database 🥳");
  app.listen(PORT, console.log(`Server listening on port ${PORT}`));
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("users", userSchema);

app.get("/getUsers", async (req, res) => {
  const userData = await UserModel.find();
  res.send(userData);
});