var path = require('path');
var express = require("express");

var app = express()

app
    .use(express.static(path.join(__dirname, "./static")))
    .get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./static", "index.html"));
    })
    .listen(process.env.PORT, () => {
        console.log("Server running on", process.env.PORT);
    });