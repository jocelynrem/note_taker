const fs = require("fs");
const db = require("./db");


db.push();

updateData = () => {
   fs.writeFile("db.json", JSON.stringify(newNote), err => {
    if (err) throw err;
    console.log("Done writing"); 
    return true
}); 
}
