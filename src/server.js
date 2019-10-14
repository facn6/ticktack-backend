const path = require("path");
const express = require("express");
require("env2")("config.env");

const app = express();
const getData = require("./database/models/GetData");


var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../build")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));