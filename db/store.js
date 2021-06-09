const fs = require("fs");
const db = require("./db");


let note = {
    title: "more Title",
    text: "some other text"
};

db.push(note);

fs.writeFile("db.json", JSON.stringify(note), err => {
    if (err) throw err;
    console.log("Done writing"); 
    return true
});