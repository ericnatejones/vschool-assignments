var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

var toDos = [
    {
        name: "Grocery Shopping",
        description: "Go to the friggin grocery store, dipwad.",
        imageUrl: "http://ilv-pullzone1.ilovevegan.netdna-cdn.com/wp-content/uploads/2014/06/groceries-week-3-vegetables5-688x442.jpg",
        completed: false,
        id: uuid.v4()
    }
]

app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
    res.send(toDos);
});

app.get("/:urlID", function (req, res) {
    for (i = 0; i < toDos.length; i++) {
        if (toDos[i].id === req.params.urlID) {
            res.send(toDos[i]);
            return;
        }
    };
    res.send("Error, bro.");
})

app.post("/", function (req, res) {
    req.body.id = uuid.v4();
    toDos.push(req.body);
    res.send(req.body);
});

app.put("/:urlID", function (req, res) {
    for (i = 0; i < toDos.length; i++) {
        if (toDos[i].id === req.params.urlID) {
            toDos[i] = req.body;
            res.send(req.body);
            return;
        }
    };
    res.send("Error, bro.");
});

app.delete("/:urlID", function (req, res) {
    for (i = 0; i < toDos.length; i++) {
        if (toDos[i].id === req.params.urlID) {
            toDos.splice(i, 1);
            res.send(toDos[i].id + "Deleted.");
            return;
        }
    };
    res.send("Error, bro.");
});

app.listen(8000, function () {
    console.log("App is listening to 8000.");
});






//app.delete("/bounty/:bountyId", function (req, res) {
//
//    for (i = 0; i < bounties.length; i++) {
//        if (bounties[i].id === req.params.bountyId) {
//            bounties.splice(i, 1);
//        }
//    }
//    res.send("YOU HAVE BEEN DELETED!");
//});
//
//app.put("/bounty/:bountyId", function (req, res) {
//
//    for (i = 0; i < bounties.length; i++) {
//        if (bounties[i].id === req.params.bountyId) {
//            bounties[i] = req.body;
//        }
//    }
//    res.send(req.body);
//});
//
//app.listen(8000, function () {
//
//    console.log("App is listening on port 8000");
//});