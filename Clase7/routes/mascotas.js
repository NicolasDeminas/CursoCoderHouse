const express = require("express");

const { Router } = express;

const router = new Router();

let arrMascotas = [
  {
    name: "Manchi",
    raza: "Sin raza",
    age: 12,
  },
];

router.get("/", (req, res) => {
  res.json(arrMascotas);
});

router.post("/", (req, res) => {
  const data = req.body;
  arrMascotas.push(data);
  res.send(`Datos enviados correctamente`);
});

module.exports = router;
