const path = require("path");
const express = require("express");
require("env2")("config.env");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));
app.use(router);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));

// app.post("/save-details", (req, res) => {
//   // TODO: Read POSTed form data and do something useful
// });

module.exports = app;
