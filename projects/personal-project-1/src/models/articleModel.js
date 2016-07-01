var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    date: String,
    body: String,
    tags: [
        {
            name: String,
            endpoint: String
        }
    ],
    comments: [
        {
            user: String,
            body: {
                type: String,
                required: true
            },
            date: String,
            length: String,
            likes: Number
        }
    ],

});

module.exports = mongoose.model("Article", articleSchema);