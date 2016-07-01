var express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 4000;

var voteRouter = require("./routes/voteRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use("/issues", voteRouter);


mongoose.connect("mongodb://localhost/rockthevote");

app.listen(port, function () {
    console.log("App is listening on port " + port);
});