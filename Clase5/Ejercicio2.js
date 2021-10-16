const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const moment = require("moment");

let hora = moment().format("DD/MM/YYYY HH:mm:ss");
let visitas = 0;

app.get("/", (req, res) => {
  res.send(`<H1 style="color:blue"> Bienvenidos al servidor Express </H1>`);
});

app.get("/visitas", (req, res) => {
  visitas += 1;
  res.send(`${visitas}`);
});

app.get("/fyh", (req, res) => {
  res.send(`${hora}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "probando api" });
});

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
