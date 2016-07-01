var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var novelSchema = new Schema({
    title: String,
    blurb: String,
    bookcover: String,
    image: String,
});

module.exports = mongoose.model("Novel", novelSchema);