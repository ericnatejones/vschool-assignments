var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.json());


app.get("/", function (req, res) {

    res.send("I'M WORKING :D");

});

app.post("/", function (req, res) {

    res.send(req.body);

});

app.put("/", function (req, res) {

    res.send("You want to update something?");
});

app.delete("/")

app.listen(8000, function () {

    console.log("App is listening on port 8000");
});