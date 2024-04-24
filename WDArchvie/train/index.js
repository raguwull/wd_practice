import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname  = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

function logger(req, res, next){
    console.log("Method : ", req.method);
    console.log("URL : ", req.url);
    next();
}

app.use(logger);
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server listening on ${port}...`);
});