const notesData = require("../db/db.json");
const store = require("../db/store.js");

module.exports = app => {
    app.get("/api/notes", (req, res) => res.json(notesData));

    app.post("/api/notes", (req, res) => {
        notesData.push(req.body);
        store.updateData();
        res.json('true');
    });
}