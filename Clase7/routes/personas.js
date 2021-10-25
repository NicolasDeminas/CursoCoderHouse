const express = require("express");

const { Router } = express;

const router = new Router();

let arrPersonas = [
  {
    name: "Nico",
    lastName: "Deminas",
    age: 30,
  },
];

router.get("/", (req, res) => {
  res.json(arrPersonas);
});

router.post("/", (req, res) => {
  const data = req.body;
  arrPersonas.push(data);
  console.log(arrPersonas);
  res.send(`Datos ${data} enviados correctamente`);
});

module.exports = router;
