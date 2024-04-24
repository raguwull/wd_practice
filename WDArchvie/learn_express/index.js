import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});
 
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
});
