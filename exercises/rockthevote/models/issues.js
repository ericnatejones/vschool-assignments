var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: String,
    comments: [String],
    popularity: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Issue", issueSchema);