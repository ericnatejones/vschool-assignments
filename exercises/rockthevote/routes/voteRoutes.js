var express = require("express");
var voteRouter = express.Router();
var Issue = require("../models/issues");

voteRouter.get("/", function (req, res) {

    Issue.find(function (err, issues) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(issues);
        }
    });
});

voteRouter.post("/", function (req, res) {
    var newIssue = new Issue(req.body);
    newIssue.popularity = 0;
    newIssue.save(function (err, issue) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(issue);
        }
    });
});

voteRouter.put("/:id", function (req, res) {

    Issue.findById(req.params.id, function (err, issue) {
        if (err) {
            res.status(500).send(err);
        } else {
            issue.title = req.body.title || issue.title;
            issue.description = req.body.description || issue.description;
            issue.imgUrl = req.body.imgUrl || issue.imgUrl;
            issue.popularity = req.body.popularity || issue.popularity;
            issue.comments = req.body.comments || issue.comments;

            issue.save(function (err, issue) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(issue);
                }
            });
        }
    });
});

voteRouter.delete("/:id", function (req, res) {

    Issue.findByIdAndRemove(req.params.id, function (err, issue) {

        if (err) {
            res.status(500).send(err);
        } else {


            Issue.find(function (err, issues) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(issues);
                }
            });
        }
    });
});

module.exports = voteRouter;