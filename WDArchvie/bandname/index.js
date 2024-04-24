import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const __dirname  = dirname(fileURLToPath(import.meta.url));
var bandname;

app.use(bodyParser.urlencoded({extended:true}));

function bandNameGenerator(req, res, next){
    bandname = req.body["fname"] + req.body["lname"];
    next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(`Your band name is ${bandname}`);
});
 
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});