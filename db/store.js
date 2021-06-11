const fs = require("fs");
const db = require("./db");

module.exports = {
    updateData: () => {
        fs.writeFile("db/db.json", JSON.stringify(db, null, 4), err => {
            if (err) throw err;
            console.log("updated data")
        })
    }
}

