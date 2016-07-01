var express = require("express");
var commuteRouter = express.Router();
var Commute = require("../models/commuteModel");

commuteRouter.route("/")
    .get(function (req, res) {
        Commute.find(req.query, function (err, commutes) {
            if (err) res.status(500).send(err);
            else res.send(commutes);
        });
    })
    .post(function (req, res) {
        var newCommute = new Commute(req.body);

        newCommute.save(function (err, commute) {
            if (err) res.status(500).send(err);
            else res.status(201).send(commute);
        });
    });

commuteRouter.route("/:id")
    .get(function (req, res) {
        Commute.findById(req.params.id, function (err, commute) {
            if (err) res.status(500).send(err);
            else res.send(commute);
        });
    })
    .delete(function (req, res) {
        Commute.findByIdAndRemove(req.params.id, function (err, commute) {
            if (err) res.status(500).send(err);
            else res.send(commute);
        });
    })
    .put(function (req, res) {

        Commute.findById(req.params.id, function (err, commute) {
            if (err) {
                res.status(500).send(err);
            } else {

                commute = req.body || commute;

                commute.save(function (err, commute) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send(commute);
                    }
                });
            }
        });
    });

commuteRouter.route("/:id/trips")
    .get(function (req, res) {
        Commute.findById(req.params.id, function (err, commute) {
            if (err) res.status(500).send(err);
            else res.send(commute.trips);
        });
    })
    .post(function (req, res) {

        Commute.findById(req.params.id, function (err, commute) {

            commute.trips.push(req.body);
            commute.save(function (err, commute) {
                if (err) res.status(500).send(err);
                else res.send(req.body);
            });
        });
    });

//ADD DELETE ROUTES

module.exports = commuteRouter;