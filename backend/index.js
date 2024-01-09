const express = require("express");
const data = require("./data/data");
const dotEnv = require("dotenv")

const app = express();
dotEnv.config();

app.get("/", (req, res) => {
    res.send("server started");
})

app.get("/api/data", (req, res) => {
    res.send(data)
})
app.get("/api/data/:id", (req, res) => {
    const singleData = data.find((elem) => elem.id === req.params.id);
    res.send(singleData);
})

app.get("/api/data/:hostId", (req, res) => {
    const singleData = data.find((elem) => elem.hostId === req.params.hostId);
    res.send(singleData);
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));