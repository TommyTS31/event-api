const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

// adding Helmet to enhance your API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("App is working"));

app.listen(5000, () => console.log("API listening on port 5000!"));

require("./database/connection.js");
require("./database/sync.js");
require("./database/associations.js");

require("./routes/routes")(app);

module.exports = {
  app,
};
