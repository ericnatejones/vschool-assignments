var express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 4000;

var commuteRouter = require("./routes/commuteRoute");

app.use(cors());
app.use(bodyParser.json());
app.use("/commutes", commuteRouter);

mongoose.connect("mongodb://localhost/commuteTracker");

app.listen(port, function () {
    console.log("App is listening on port " + port);
});