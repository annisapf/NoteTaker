const fs = require("fs");
const path = require("path");

const db = require("../db/db.json");
const filePath = path.join(__dirname, "../db/db.json");

module.exports = function (app) {
    //Display all notes
    app.get("/api/notes", function (req, res) {
        res.json(db);
    })

    //Create new notes
    app.post("/api/notes", function (req, res) {
        var newnote = req.body;
        //Generate unique id
        var nowdate = new Date();
        var thismoment = nowdate.getTime();
        console.log(thismoment);
        newnote.id = thismoment;

        db.push(newnote);

        fs.writeFile(filePath, JSON.stringify(db, null), err => {
            if (err) throw err;
            console.log("New note is added successfully");
        })

        res.send(newnote);

    })
    //Delete notes
    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params);

        var indexToDelete = req.params.id;
        for (var idx = 0; idx < db.length; idx++) {
            var currentidx = db[idx].id.toString();
            if (currentidx == indexToDelete) {
                db.splice(idx, 1)

                fs.writeFile(filePath, JSON.stringify(db, null), err => {
                    if (err) throw err;
                    console.log("Delete note is added successfully");
                })
                break;

            }

        }
        console.log(db);

    });

};