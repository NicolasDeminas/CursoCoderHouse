"use strict";

var express = require("express");

var app = express();
var port = process.env.port || 8080;
app.get("/", function (req, res) {
  res.send("hola mundooo");
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});