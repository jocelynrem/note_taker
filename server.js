const express = require('express');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes.js")(app)
require("./db/store.js")

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
