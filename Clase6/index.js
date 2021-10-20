const express = require("express");
const app = express();
app.use(express.json());

const frase = "Hola mundo como están";

app.get("/", (req, res) => {
  res.status(201).send("hola mundo");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST!!");
});

app.get("/api/frase", (req, res) => {
  res.send(frase);
});

app.get("/api/letras/:num", (req, res) => {
  let numOrden = req.params.num - 1;
  let letra = frase.substr(numOrden, 1);
  if (numOrden >= frase.length) {
    throw "El parametro esta fuera del rango";
  }
  res.send(letra);
});

app.get("/api/palabras/:num", (req, res) => {
  let palabra = frase.split(" ");
  let numPalabra = req.params.num - 1;
  if (numPalabra >= palabra.length) {
    throw "El parametro esta fuera del rango";
  }
  res.send(palabra[numPalabra]);
});

app.listen(8080, () => {
  console.log("Server run on port 8080");
});
