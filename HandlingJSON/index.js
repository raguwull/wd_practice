import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    console.log(req);
    res.send("<h1>Hello World</h1>");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
