var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

var bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 100000000,
        type: "Jedi",
        id: uuid.v4()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        living: false,
        bountyAmount: 5000,
        type: "Jedi",
        id: uuid.v4()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: false,
        bountyAmount: 999999,
        type: "Sith",
        id: uuid.v4()
    },
    {
        firstName: "Kylo",
        lastName: "Ren",
        living: true,
        bountyAmount: 5,
        type: "Sith",
        id: uuid.v4()
    }
];

console.log(bounties);
app.get("/bounty", function (req, res) {
    res.send(bounties);
});

app.post("/bounty", function (req, res) {
    req.body.id = uuid.v4();
    bounties.push(req.body);
    res.send(req.body);
});

app.delete("/bounty/:bountyId", function (req, res) {

    for (i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties.splice(i, 1);
        }
    }
    res.send("YOU HAVE BEEN DELETED!");
});

app.put("/bounty/:bountyId", function (req, res) {

    for (i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties[i] = req.body;
        }
    }
    res.send(req.body);
});

app.listen(8000, function () {

    console.log("App is listening on port 8000");
});