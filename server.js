const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.redirect('/');
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/brand.routes.js")(app);
require("./app/routes/article.routes.js")(app);
require("./app/routes/size.routes.js")(app);
require("./app/routes/colour.routes.js")(app);
require("./app/routes/quantity.routes.js")(app);
require("./app/routes/mrp.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
