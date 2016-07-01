var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    _id: Number

});

var tagSchema = new Schema({
    tagName: {
        type: String,
        required: true
    },
    tagId: {
        type: Number,
        required: true
    }
});

var postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Number,
        required: true
    },
    tagIds: [Number],
    comments: [
        {
            content: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            },
            userId: {
                type: String,
                required: true
            }
        }
    ]
});