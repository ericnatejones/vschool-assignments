var express = require("express");
var articlesRouter = express.Router();
var Article = require("../models/articleModel");


articlesRouter.route("/")
    .get(function (req, res) {
        Article.find(req.query, function (err, articles) {
            if (err) res.status(500).send(err);
            else res.send(articles);
        });
    })
    .post(function (req, res) {
        var newArticle = new Article(req.body);

        newArticle.save(function (err, article) {
            if (err) res.status(500).send(err);
            else res.status(201).send(article);
        });
    });

articlesRouter.route("/:id")
    .get(function (req, res) {
        Article.findById(req.params.id, function (err, article) {
            if (err) res.status(500).send(err);
            else res.send(article);
        });
    })
    .delete(function (req, res) {
        Article.findByIdAndRemove(req.params.id, function (err, article) {
            if (err) res.status(500).send(err);
            else res.send(article);
        });
    });

articlesRouter.route("/:id/comments")
    .get(function (req, res) {
        Article.findById(req.params.id, function (err, article) {
            if (err) res.status(500).send(err);
            else res.send(article.comments);
        });
    })
    .post(function (req, res) {

        Article.findById(req.params.id, function (err, article) {

            article.comments.push(req.body);
            article.save(function (err, article) {
                if (err) res.status(500).send(err);
                else res.send(req.body);
            });
        });
    });


articlesRouter.route("/:id/comments/:commentId")
    .put(function (req, res) {

        Article.findById(req.params.id, function (err, article) {
            if (err) {
                res.status(500).send(err);
            } else {

                article.comments = req.body.comments || article.comments;

                article.save(function (err, article) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send(article);
                    }
                });
            }
        });
    });

module.exports = articlesRouter;