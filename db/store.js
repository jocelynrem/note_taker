const fs = require("fs");
const db = require("./db");
// let notes = JSON.parse(data);

module.exports = {
    updateData: () => {
    fs.writeFile("db/db.json", JSON.stringify(db, null, 4), err => {
        if (err) throw err;
        console.log("saved data")
        // res.json(db)
    });
}

}


// updateData();


