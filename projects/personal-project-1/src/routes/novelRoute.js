var express = require("express");
var novelsRouter = express.Router();
var Novel = require("../models/novelModel");

novelsRouter.get("/", function(req, res) {
    Novel.find(req.query, function(err, novels) {
        if (err) res.status(500).send(err);
        else res.send(novels);
    });
});

novelsRouter.get("/:id", function(req, res) {
    Novel.findById(req.params.id, function(err, novel) {
        if (err) res.status(500).send(err);
        else res.send(novel);
    });
});

novelsRouter.post("/", function(req, res) {
    var newNovel = new Novel(req.body);
    newNovel.save(function(err, novel) {
        if (err) res.status(500).send(err);
        else res.send(novel);
    });
});

novelsRouter.put("/:id", function(req, res) {
    Novel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, novel) {
        if (err) res.status(500).send(err);
        else res.send(novel);
    });
});

novelsRouter.delete("/:id", function(req, res) {
    Novel.findByIdAndRemove(req.params.id, function(err, novel) {
        if (err) res.status(500).send(err);
        else res.send(novel);
    });
});

module.exports = novelsRouter;