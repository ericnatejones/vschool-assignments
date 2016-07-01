var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commuteSchema = new Schema({
    title: String,
    notes: String,
    trips: [
        {
            date: String,
            time: Number
        }
    ]
});

module.exports = mongoose.model("Commute", commuteSchema);