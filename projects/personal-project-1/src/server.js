var express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 4000;

var novelRouter = require("./routes/novelRoute");
var articleRouter = require("./routes/articleRoute");


app.use(cors());
app.use(bodyParser.json());
app.use("/novels", novelRouter);
app.use("/articles", articleRouter);



mongoose.connect("mongodb://localhost/authorSite");

app.listen(port, function () {
    console.log("App is listening on port " + port);
});